package kubacki.dawid.ReservEat.service.impl;

import kubacki.dawid.ReservEat.dto.UserDto;
import kubacki.dawid.ReservEat.mapper.UserMapper;
import kubacki.dawid.ReservEat.models.User;
import kubacki.dawid.ReservEat.repository.UserRepository;
import kubacki.dawid.ReservEat.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor

public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto getByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found."));
        return UserMapper.mapToUserDto(user);
    }
}
