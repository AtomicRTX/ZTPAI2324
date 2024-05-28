package kubacki.dawid.ReservEat.controllers;

import kubacki.dawid.ReservEat.dto.UserDto;
import kubacki.dawid.ReservEat.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor


public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/current")
    public ResponseEntity<UserDto> getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = userService.getByEmail(auth.getName());
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/edit")
    public ResponseEntity<UserDto> editUser(@RequestBody UserDto userDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto1 = userService.getByEmail(auth.getName());

        userDto1.setName(userDto.getName());
        userDto1.setSurname(userDto.getSurname());
        userDto1.setPhoto(userDto.getPhoto());
        userDto1.setPhone(userDto.getPhone());

        userService.updateUser(userDto1);
        return ResponseEntity.ok(userDto1);
    }
}
