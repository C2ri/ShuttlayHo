package com.c2ri.backend.member.service

import com.c2ri.backend.common.authority.JwtTokenProvider
import com.c2ri.backend.common.authority.TokenInfo
import com.c2ri.backend.common.exception.InvalidInputException
import com.c2ri.backend.common.status.ROLE
import com.c2ri.backend.member.dto.LoginDto
import com.c2ri.backend.member.dto.MemberDtoRequest
import com.c2ri.backend.member.dto.MemberDtoResponse
import com.c2ri.backend.member.entity.Member
import com.c2ri.backend.member.entity.MemberRole
import com.c2ri.backend.member.repository.MemberRepository
import com.c2ri.backend.member.repository.MemberRoleRepository
import jakarta.transaction.Transactional
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Transactional
@Service
class MemberService(
    private val memberRepository: MemberRepository,
    private val memberRoleRepository: MemberRoleRepository,
    private val authenticationManagerBuilder: AuthenticationManagerBuilder,
    private val jwtTokenProvider: JwtTokenProvider,
) {
    /**
     * 회원가입
     */
    fun signUp(memberDtoRequest: MemberDtoRequest): String {
        // ID 중복 검사
        var member: Member? = memberRepository.findByLoginId(memberDtoRequest.loginId)
        if (member != null) {
            throw InvalidInputException("loginId", "이미 등록된 ID 입니다.")
        }

        member = memberDtoRequest.toEntity()
        memberRepository.save(member)

        val memberRole: MemberRole = MemberRole(null, ROLE.MEMBER, member)
        memberRoleRepository.save(memberRole)

        return "회원가입이 완료되었습니다."
    }

    /**
     * 로그인 -> 토큰 발행
     */
    fun login(loginDto: LoginDto): TokenInfo {
        val authenticationToken = UsernamePasswordAuthenticationToken(loginDto.loginId, loginDto.password)
        val authentication = authenticationManagerBuilder.`object`.authenticate(authenticationToken)

        return jwtTokenProvider.createToken(authentication)
    }

    /**
     * 내 정보 조회
     */
    fun searchMyInfo(id: Long): MemberDtoResponse {
        val member: Member = memberRepository.findByIdOrNull(id) ?: throw InvalidInputException("id", "회원번호(${id})가 존재하지 않는 유저입니다.")
        return member.toDto()
    }

    /**
     * 내 정보 수정
     */
    fun saveMyInfo(memberDtoRequest: MemberDtoRequest): String {
        val member: Member = memberDtoRequest.toEntity()
        memberRepository.save(member)
        return "수정이 완료되었습니다."
    }
}