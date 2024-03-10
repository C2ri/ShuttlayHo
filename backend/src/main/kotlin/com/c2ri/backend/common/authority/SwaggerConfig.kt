package com.c2ri.backend.common.authority

import io.swagger.v3.oas.annotations.OpenAPIDefinition
import io.swagger.v3.oas.annotations.info.Info
import lombok.RequiredArgsConstructor
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@OpenAPIDefinition(
    info = Info(title       = "셔를레이호 App",
                description = "셔를레이호 API 명세",
                version     = "v1"))
@RequiredArgsConstructor
@Configuration
class SwaggerConfig {
}