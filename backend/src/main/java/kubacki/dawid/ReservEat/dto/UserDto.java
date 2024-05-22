package kubacki.dawid.ReservEat.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserDto {
    private int user_id;
    private String name;
    private String surname;
    private String email;
    private String password;
    private String phone;
    private String photo;
}
