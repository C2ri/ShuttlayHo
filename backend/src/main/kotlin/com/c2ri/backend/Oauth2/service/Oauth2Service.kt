package com.c2ri.backend.Oauth2.service

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
import org.springframework.stereotype.Service

@Transactional
@Service
class Oauth2Service(

) {

}