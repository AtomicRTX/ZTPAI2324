package kubacki.dawid.ReservEat.service;

import kubacki.dawid.ReservEat.dto.UserDto;

import java.util.List;

public interface UserService {
    UserDto getByEmail(String email);
    void updateUser(UserDto userDto);
    Boolean isAdmin(UserDto userDto);
    List<UserDto> getAllUsers();
    void deleteUser(int user_id);
}
