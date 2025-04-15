package com.PMS.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PMS.model.Chat;

public interface ChatRepository extends JpaRepository<Chat, Long> {
    Chat findByProjectId(Long projectId); //added
}
