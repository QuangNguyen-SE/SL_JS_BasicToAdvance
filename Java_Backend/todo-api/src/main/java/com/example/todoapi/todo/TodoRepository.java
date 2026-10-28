package com.example.todoapi.todo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TodoRepository extends JpaRepository<Todo, Long> {

    // Luon loc theo chu so huu de user A khong doc/sua duoc du lieu cua user B.
    Page<Todo> findByOwnerUsername(String username, Pageable pageable);

    Optional<Todo> findByIdAndOwnerUsername(Long id, String username);
}
