package kubacki.dawid.ReservEat.service;


import kubacki.dawid.ReservEat.dto.ReservationRequest;

public interface ReservationService {
    ReservationRequest makeReservation(ReservationRequest reservationRequest);
}
