package com.PMS.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class authenticate {

    @GetMapping("/")
    public String home() {
        return "Backend is running successfully!";
    }
}
