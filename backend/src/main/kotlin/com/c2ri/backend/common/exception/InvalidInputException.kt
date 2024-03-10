package com.c2ri.backend.common.exception

class InvalidInputException(
    val fieldName: String = "",
    message: String = "Invalid Input"
) : RuntimeException(message)