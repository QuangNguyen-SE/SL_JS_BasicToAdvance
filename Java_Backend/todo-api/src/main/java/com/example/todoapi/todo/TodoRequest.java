package com.example.todoapi.todo;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record TodoRequest(
        @NotBlank(message = "title khong duoc de trong")
        @Size(max = 200, message = "title toi da 200 ky tu")
        String title,

        @Size(max = 1000, message = "description toi da 1000 ky tu")
        String description,

        Boolean done
) {
}
