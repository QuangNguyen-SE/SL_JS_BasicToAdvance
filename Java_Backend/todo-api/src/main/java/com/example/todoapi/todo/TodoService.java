package com.example.todoapi.todo;

import com.example.todoapi.common.ResourceNotFoundException;
import com.example.todoapi.user.User;
import com.example.todoapi.user.UserRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TodoService {

    private final TodoRepository todos;
    private final UserRepository users;

    public TodoService(TodoRepository todos, UserRepository users) {
        this.todos = todos;
        this.users = users;
    }

    @Transactional(readOnly = true)
    public PageResponse<TodoResponse> list(String username, int page, int size) {
        // Gioi han size de client khong xin 1 trieu dong mot luc.
        var pageable = PageRequest.of(Math.max(page, 0), Math.min(Math.max(size, 1), 100),
                Sort.by(Sort.Direction.DESC, "createdAt"));
        return PageResponse.of(todos.findByOwnerUsername(username, pageable), TodoResponse::from);
    }

    @Transactional(readOnly = true)
    public TodoResponse get(String username, Long id) {
        return TodoResponse.from(findOwned(username, id));
    }

    @Transactional
    public TodoResponse create(String username, TodoRequest req) {
        User owner = users.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User khong ton tai"));
        Todo todo = new Todo(req.title(), req.description(), Boolean.TRUE.equals(req.done()), owner);
        return TodoResponse.from(todos.save(todo));
    }

    @Transactional
    public TodoResponse update(String username, Long id, TodoRequest req) {
        Todo todo = findOwned(username, id);
        todo.setTitle(req.title());
        todo.setDescription(req.description());
        todo.setDone(Boolean.TRUE.equals(req.done()));
        return TodoResponse.from(todo); // dirty checking: JPA tu UPDATE khi commit
    }

    @Transactional
    public void delete(String username, Long id) {
        todos.delete(findOwned(username, id));
    }

    // Todo cua nguoi khac cung tra 404 (khong tra 403) de khong lo su ton tai cua no.
    private Todo findOwned(String username, Long id) {
        return todos.findByIdAndOwnerUsername(id, username)
                .orElseThrow(() -> new ResourceNotFoundException("Khong tim thay todo " + id));
    }
}
