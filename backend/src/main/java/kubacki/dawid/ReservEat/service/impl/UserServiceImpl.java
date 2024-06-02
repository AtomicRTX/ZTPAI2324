package kubacki.dawid.ReservEat.service.impl;

import jakarta.transaction.Transactional;
import kubacki.dawid.ReservEat.dto.UserDto;
import kubacki.dawid.ReservEat.mapper.UserMapper;
import kubacki.dawid.ReservEat.models.User;
import kubacki.dawid.ReservEat.repository.ReservationRepository;
import kubacki.dawid.ReservEat.repository.UserRepository;
import kubacki.dawid.ReservEat.service.UserService;
import kubacki.dawid.ReservEat.service.TypeEnum;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor

public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private ReservationRepository reservationRepository;

    @Override
    public UserDto getByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found."));
        return UserMapper.mapToUserDto(user);
    }
    @Override
    public void updateUser(UserDto userDto) {
        User user = userRepository.findById(userDto.getUser_id()).orElseThrow(() -> new RuntimeException("User not found."));

        user.setName(userDto.getName());
        user.setSurname(userDto.getSurname());
        user.setPhoto(userDto.getPhoto());
        user.setPhone(userDto.getPhone());

        userRepository.save(user);
    }

    @Override
    public Boolean isAdmin(UserDto userDto) {
        User user = userRepository.findById(userDto.getUser_id()).orElseThrow(() -> new RuntimeException("User not found."));
        return user.getTypes().stream().anyMatch(type -> type.getName().equals(TypeEnum.ADMIN.name()));
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user -> UserMapper.mapToUserDto(user))).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void deleteUser(int user_id) {
        User user = userRepository.findById(user_id).orElseThrow(() -> new RuntimeException("User not found."));
        reservationRepository.deleteByUser(user);
        userRepository.delete(user);
    }
}
