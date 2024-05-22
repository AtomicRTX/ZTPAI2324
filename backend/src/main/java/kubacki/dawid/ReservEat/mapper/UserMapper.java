package kubacki.dawid.ReservEat.mapper;


import kubacki.dawid.ReservEat.dto.UserDto;
import kubacki.dawid.ReservEat.models.User;

public class UserMapper {
    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getUser_id(),
                user.getName(),
                user.getSurname(),
                user.getEmail(),
                user.getPassword(),
                user.getPhone(),
                user.getPhoto()
        );
    }
}

