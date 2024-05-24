package kubacki.dawid.ReservEat.mapper;

import kubacki.dawid.ReservEat.dto.ReservationRequest;
import kubacki.dawid.ReservEat.models.Reservation;

public class ReservationMapper {

    public static ReservationRequest mapToReservationRequest(Reservation reservation) {
        return new ReservationRequest(
                reservation.getReserv_id(),
                reservation.getUser().getUser_id(),
                reservation.getRestaurant().getRes_id(),
                reservation.getDate(),
                reservation.getHour(),
                reservation.getNumber_of_people()
        );
    }
}
