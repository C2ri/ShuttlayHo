package com.c2ri.backend.common.authority

data class TokenInfo(
    val grantType: String,
    val accessToken: String,
)