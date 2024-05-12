package kubacki.dawid.ReservEat.controllers;

import kubacki.dawid.ReservEat.models.Restaurant;
import kubacki.dawid.ReservEat.models.User;
import kubacki.dawid.ReservEat.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor


public class UserController {

    private final UserRepository userRepository;

}
