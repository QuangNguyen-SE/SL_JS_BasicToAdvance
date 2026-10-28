package com.example.todoapi.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

// Chi de hoc/thu phan quyen. Dat app.seed-admin=false khi deploy.
@Component
@ConditionalOnProperty(name = "app.seed-admin", havingValue = "true")
public class AdminSeeder implements CommandLineRunner {

    private final UserRepository users;
    private final PasswordEncoder encoder;

    public AdminSeeder(UserRepository users, PasswordEncoder encoder) {
        this.users = users;
        this.encoder = encoder;
    }

    @Override
    public void run(String... args) {
        if (!users.existsByUsername("admin")) {
            users.save(new User("admin", encoder.encode("admin123"), Role.ADMIN));
        }
    }
}
