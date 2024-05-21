package kubacki.dawid.ReservEat.service;

import kubacki.dawid.ReservEat.dto.UserDto;

public interface UserService {
    UserDto getByEmail(String email);
}
