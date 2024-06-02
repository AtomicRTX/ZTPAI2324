package kubacki.dawid.ReservEat.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class ReservationRequest {
    private int reserv_id;
    private Integer user_id;
    private Integer restaurant_id;
    private LocalDate date;
    private LocalTime hour;
    private int number_of_people;
}
