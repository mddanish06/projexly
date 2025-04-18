package com.PMS.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PMS.model.Issue;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    public List<Issue> findByProjectId(Long id);
}
