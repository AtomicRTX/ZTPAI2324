package kubacki.dawid.ReservEat.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class RestaurantDto {
    private int res_id;
    private String res_name;
    private String res_location;
    private String res_logo;
    private String res_map;
    private String res_d;
    private int res_like;
    private LocalTime start_hour;
    private LocalTime end_hour;
}
