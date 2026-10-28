package com.example.todoapi.todo;

import java.time.Instant;

public record TodoResponse(Long id, String title, String description, boolean done, Instant createdAt) {
    public static TodoResponse from(Todo t) {
        return new TodoResponse(t.getId(), t.getTitle(), t.getDescription(), t.isDone(), t.getCreatedAt());
    }
}
