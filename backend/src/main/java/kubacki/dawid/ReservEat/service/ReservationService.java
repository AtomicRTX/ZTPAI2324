package kubacki.dawid.ReservEat.service;


import kubacki.dawid.ReservEat.dto.ReservationRequest;

import java.util.List;

public interface ReservationService {
    ReservationRequest makeReservation(ReservationRequest reservationRequest);
    List<ReservationRequest> getActualReservations(int user_id);
    List<ReservationRequest> getPastReservations(int user_id);
    ReservationRequest cancelReservation(int reserv_id);
}
