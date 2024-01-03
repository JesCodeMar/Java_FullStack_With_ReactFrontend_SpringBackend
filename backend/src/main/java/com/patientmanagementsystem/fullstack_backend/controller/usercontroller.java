package com.patientmanagementsystem.fullstack_backend.controller;

import java.util.*;

import com.patientmanagementsystem.fullstack_backend.exceptions.UsernotFoundException;
import com.patientmanagementsystem.fullstack_backend.model.user;
import com.patientmanagementsystem.fullstack_backend.repository.user_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class usercontroller {
    @Autowired
    private user_repository userRepository;

    @PostMapping("/user")
    user newUser(@RequestBody user newuser){
        return userRepository.save(newuser);
    }

    @GetMapping("/users")
    List<user> getAllusers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    user getUserbyId(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UsernotFoundException(id));
    }

    @PutMapping("/user/{id}")
    user updateUser(@RequestBody user newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user->{
                    user.setUser_name(newUser.getUser_name());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                })
                .orElseThrow(()->new UsernotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UsernotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted";
    }
}
