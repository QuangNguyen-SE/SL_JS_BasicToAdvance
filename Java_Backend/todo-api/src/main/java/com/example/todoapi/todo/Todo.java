package com.example.todoapi.todo;

import com.example.todoapi.user.User;
import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "todos")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private boolean done;

    @Column(nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    // Nhieu todo thuoc ve 1 user. LAZY de tranh nap user khong can thiet (N+1).
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "owner_id")
    private User owner;

    protected Todo() {
    }

    public Todo(String title, String description, boolean done, User owner) {
        this.title = title;
        this.description = description;
        this.done = done;
        this.owner = owner;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public boolean isDone() { return done; }
    public Instant getCreatedAt() { return createdAt; }
    public User getOwner() { return owner; }

    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
    public void setDone(boolean done) { this.done = done; }
}
