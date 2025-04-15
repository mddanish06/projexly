package com.PMS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendEmailWithToken(String userEmail, String userName, String link) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

        String subject = "Join Project Team Invitation";
        String htmlContent = 
        "<div style=\"font-family: Poppins, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border: 1px solid #ccc; border-radius: 5px;\">" +
        "    <h1 style=\"font-size: 22px; font-weight: 500; color: #854CE6; text-align: center; margin-bottom: 30px;\">Join Your Project Team</h1>" +
        "    <div style=\"background-color: #FFF; border: 1px solid #e5e5e5; border-radius: 5px; box-shadow: 0px 3px 6px rgba(0,0,0,0.05);\">" +
        "        <div style=\"background-color: #854CE6; border-top-left-radius: 5px; border-top-right-radius: 5px; padding: 20px 0;\">" +
        "            <h2 style=\"font-size: 28px; font-weight: 500; color: #FFF; text-align: center; margin-bottom: 10px;\">Invitation to Collaborate</h2>" +
        "        </div>" +
        "        <div style=\"padding: 30px;\">" +
        "            <p style=\"font-size: 14px; color: #666; margin-bottom: 20px;\">Dear " + userName + ",</p>" +
        "            <p style=\"font-size: 14px; color: #666; margin-bottom: 20px;\">You have been invited to join the project team. Click the link below to accept the invitation:</p>" +
        "            <a href=\"" + link + "\" style=\"display: inline-block; font-size: 16px; font-weight: 500; color: #FFF; background-color: #854CE6; text-decoration: none; padding: 10px 20px; border-radius: 5px; text-align: center;\">Join Project</a>" +
        "            <p style=\"font-size: 12px; color: #666; margin-top: 20px;\">If you did not expect this invitation, you can safely ignore this email.</p>" +
        "        </div>" +
        "    </div>" +
        "    <br>" +
        "    <p style=\"font-size: 16px; color: #666; margin-bottom: 20px; text-align: center;\">Best regards,<br>The Project Management Team</p>" +
        "</div>";

        helper.setSubject(subject);
        helper.setText(htmlContent, true);
        helper.setTo(userEmail);

        try {
            javaMailSender.send(mimeMessage);
        } catch (MailSendException e) {
            throw new MailSendException("Failed to send email", e);
        }
    }

}
