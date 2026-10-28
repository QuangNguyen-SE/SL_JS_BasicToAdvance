package com.example.todoapi.todo;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService service;

    public TodoController(TodoService service) {
        this.service = service;
    }

    @GetMapping
    public PageResponse<TodoResponse> list(Principal principal,
                                           @RequestParam(defaultValue = "0") int page,
                                           @RequestParam(defaultValue = "10") int size) {
        return service.list(principal.getName(), page, size);
    }

    @GetMapping("/{id}")
    public TodoResponse get(Principal principal, @PathVariable Long id) {
        return service.get(principal.getName(), id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TodoResponse create(Principal principal, @Valid @RequestBody TodoRequest req) {
        return service.create(principal.getName(), req);
    }

    @PutMapping("/{id}")
    public TodoResponse update(Principal principal, @PathVariable Long id, @Valid @RequestBody TodoRequest req) {
        return service.update(principal.getName(), id, req);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(Principal principal, @PathVariable Long id) {
        service.delete(principal.getName(), id);
    }
}
