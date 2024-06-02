package kubacki.dawid.ReservEat.controllers;

import kubacki.dawid.ReservEat.dto.ReservationRequest;
import kubacki.dawid.ReservEat.dto.UserDto;
import kubacki.dawid.ReservEat.service.ReservationService;

import kubacki.dawid.ReservEat.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reservation")
@RequiredArgsConstructor

public class ReservationController {
    private final ReservationService reservationService;
    private final UserService userService;

    @PostMapping("/add")
    public ResponseEntity<ReservationRequest> createReservation(@RequestBody ReservationRequest reservationRequest) {
        ReservationRequest savedReservation = reservationService.makeReservation(reservationRequest);
        return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
    }

    @DeleteMapping("/cancel")
    public ResponseEntity<ReservationRequest> deleteReservation(@RequestBody ReservationRequest reservationRequest) {
        reservationService.cancelReservation(reservationRequest.getReserv_id());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/actual")
    public ResponseEntity<List<ReservationRequest>> getActualReservations() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = auth.getName();
        UserDto currentUser = userService.getByEmail(userEmail);
        List<ReservationRequest> reservations = reservationService.getActualReservations(currentUser.getUser_id());
        return ResponseEntity.ok(reservations);
    }

    @GetMapping("/past")
    public ResponseEntity<List<ReservationRequest>> getPastReservations() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = auth.getName();
        UserDto currentUser = userService.getByEmail(userEmail);
        List<ReservationRequest> reservations = reservationService.getPastReservations(currentUser.getUser_id());
        return ResponseEntity.ok(reservations);
    }
}
