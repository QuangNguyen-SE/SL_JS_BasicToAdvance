package com.example.todoapi.auth;

public record AuthResponse(String token, String tokenType) {
    public static AuthResponse bearer(String token) {
        return new AuthResponse(token, "Bearer");
    }
}
