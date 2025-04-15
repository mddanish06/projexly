package com.PMS.service;

import jakarta.mail.MessagingException;

public interface EmailService {
    void sendEmailWithToken(String userEmail, String userName, String link) throws MessagingException;
}
