package com.patientmanagementsystem.fullstack_backend.exceptions;

public class UsernotFoundException extends RuntimeException{
    public UsernotFoundException(Long id){
        super("Could not find the user with required id");
    }
}
