package com.example.todoapi.common;

import java.time.Instant;
import java.util.Map;

public record ErrorResponse(Instant timestamp, int status, String error, Map<String, String> details) {
    public static ErrorResponse of(int status, String error) {
        return new ErrorResponse(Instant.now(), status, error, Map.of());
    }
}
