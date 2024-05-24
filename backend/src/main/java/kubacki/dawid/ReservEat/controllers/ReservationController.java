package kubacki.dawid.ReservEat.controllers;

import kubacki.dawid.ReservEat.dto.ReservationRequest;
import kubacki.dawid.ReservEat.service.ReservationService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/reservation")
@RequiredArgsConstructor

public class ReservationController {
    private final ReservationService reservationService;

    @PostMapping("/add")
    public ResponseEntity<ReservationRequest> createReservation(@RequestBody ReservationRequest reservationRequest) {
        ReservationRequest savedReservation = reservationService.makeReservation(reservationRequest);
        return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
    }
}
