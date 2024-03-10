package com.c2ri.backend.common.dto

import com.c2ri.backend.common.status.ResultCode

data class BaseResponse<T>(
    val resultCode: String = ResultCode.SUCCESS.name,
    val data: T? = null,
    val message: String = ResultCode.SUCCESS.msg,
)