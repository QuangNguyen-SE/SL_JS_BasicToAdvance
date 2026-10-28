package com.example.todoapi.auth;

import com.example.todoapi.common.ConflictException;
import com.example.todoapi.security.JwtService;
import com.example.todoapi.user.Role;
import com.example.todoapi.user.User;
import com.example.todoapi.user.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository users;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthService(UserRepository users, PasswordEncoder passwordEncoder,
                       AuthenticationManager authenticationManager, JwtService jwtService) {
        this.users = users;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public AuthResponse register(AuthRequest req) {
        if (users.existsByUsername(req.username())) {
            throw new ConflictException("Username da ton tai");
        }
        // Role luon la USER: khong cho client tu chon role luc dang ky.
        User user = users.save(new User(req.username(), passwordEncoder.encode(req.password()), Role.USER));
        return AuthResponse.bearer(jwtService.generateToken(user.getUsername()));
    }

    public AuthResponse login(AuthRequest req) {
        // Sai thong tin se nem BadCredentialsException -> GlobalExceptionHandler tra 401.
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.username(), req.password()));
        return AuthResponse.bearer(jwtService.generateToken(req.username()));
    }
}
