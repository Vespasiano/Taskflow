package com.vespasiano.taskflow_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/api/health")
    public String health() {
        return "✅ Backend running! Database disabled for setup";
    }
    
    @GetMapping("/api/test")
    public String test() {
        return "🚀 Spring Boot 3.5.5 working! Ready for database connection";
    }
    
    @GetMapping("/api/info")
    public String info() {
        return "Taskflow Backend - Java 21 + Spring Boot 3.5.5";
    }
}