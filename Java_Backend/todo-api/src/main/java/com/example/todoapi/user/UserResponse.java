package com.example.todoapi.user;

// DTO: chi tra ve nhung gi can thiet (khong lo password hash).
public record UserResponse(Long id, String username, Role role) {
    public static UserResponse from(User u) {
        return new UserResponse(u.getId(), u.getUsername(), u.getRole());
    }
}
