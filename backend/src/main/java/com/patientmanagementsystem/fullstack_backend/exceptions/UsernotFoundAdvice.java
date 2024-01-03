package com.patientmanagementsystem.fullstack_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UsernotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(UsernotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> exceptionHandler(UsernotFoundException exception){
        Map<String,String> error_map=new HashMap<>();
        error_map.put("Error",exception.getMessage());

        return error_map;
    }
}
