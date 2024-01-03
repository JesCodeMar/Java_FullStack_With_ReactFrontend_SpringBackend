package com.patientmanagementsystem.fullstack_backend.repository;

import com.patientmanagementsystem.fullstack_backend.model.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface user_repository extends JpaRepository<user,Long> {
}
