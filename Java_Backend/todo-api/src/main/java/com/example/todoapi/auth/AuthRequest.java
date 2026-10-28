package com.example.todoapi.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record AuthRequest(
        @NotBlank(message = "username khong duoc de trong")
        @Size(min = 3, max = 50, message = "username tu 3 den 50 ky tu")
        @Pattern(regexp = "^[A-Za-z0-9_.-]+$", message = "username chi gom chu, so, _ . -")
        String username,

        @NotBlank(message = "password khong duoc de trong")
        @Size(min = 6, max = 72, message = "password tu 6 den 72 ky tu") // BCrypt gioi han 72 byte
        String password
) {
}
