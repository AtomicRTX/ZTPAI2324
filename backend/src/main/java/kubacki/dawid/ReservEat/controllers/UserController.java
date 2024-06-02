package kubacki.dawid.ReservEat.controllers;

import kubacki.dawid.ReservEat.dto.UserDto;
import kubacki.dawid.ReservEat.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor


public class UserController {

    @Autowired
    private UserService userService;

    private UserDto currentUser(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = userService.getByEmail(auth.getName());
        return userDto;
    }

    @GetMapping("/current")
    public ResponseEntity<UserDto> getCurrentUser() {
        UserDto userDto = currentUser();
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/edit")
    public ResponseEntity<UserDto> editUser(@RequestBody UserDto userDto) {
        UserDto userDto1 = currentUser();

        userDto1.setName(userDto.getName());
        userDto1.setSurname(userDto.getSurname());
        userDto1.setPhoto(userDto.getPhoto());
        userDto1.setPhone(userDto.getPhone());

        userService.updateUser(userDto1);
        return ResponseEntity.ok(userDto1);
    }
    @GetMapping("/admin")
    public ResponseEntity<Boolean> getAdminUser() {
        UserDto userDto = currentUser();
        Boolean admin = userService.isAdmin(userDto);
        return ResponseEntity.ok(admin);
    }
    @GetMapping("/all")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        UserDto userDto = currentUser();
        List<UserDto> userDtos = userService.getAllUsers();
        userDtos.removeIf(user -> user.getUser_id() == userDto.getUser_id());
        return ResponseEntity.ok(userDtos);
    }
    @PostMapping("/delete")
    public ResponseEntity<UserDto> deleteUser(@RequestBody UserDto userDto) {
        userService.deleteUser(userDto.getUser_id());
        return ResponseEntity.ok(userDto);
    }
}
