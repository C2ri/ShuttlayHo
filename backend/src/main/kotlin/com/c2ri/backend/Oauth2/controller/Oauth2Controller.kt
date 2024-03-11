package com.c2ri.backend.Oauth2.controller

import com.c2ri.backend.common.authority.TokenInfo
import com.c2ri.backend.common.dto.BaseResponse
import com.c2ri.backend.common.dto.CustomUser
import com.c2ri.backend.member.dto.LoginDto
import com.c2ri.backend.member.dto.MemberDtoRequest
import com.c2ri.backend.member.dto.MemberDtoResponse
import com.c2ri.backend.member.service.MemberService
import jakarta.validation.Valid
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RequestMapping("/api/social")
@RestController
class Oauth2Controller(
    private val memberService: MemberService
) {
}