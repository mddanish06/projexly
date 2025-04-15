package com.PMS.controller;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.PMS.model.Message;

@Controller
public class RealTimeChatController {
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/sendMessage/{projectId}")
    @SendTo("/topic/chat/{projectId}")
    public Message sendMessage(@DestinationVariable Long projectId, @Payload Message message) {
        simpMessagingTemplate.convertAndSend("/topic/chat/" + projectId, message);
        return message;
    }
}
