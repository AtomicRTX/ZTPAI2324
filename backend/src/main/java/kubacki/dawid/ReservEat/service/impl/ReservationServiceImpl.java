package kubacki.dawid.ReservEat.service.impl;

import kubacki.dawid.ReservEat.dto.ReservationRequest;
import kubacki.dawid.ReservEat.mapper.ReservationMapper;
import kubacki.dawid.ReservEat.mapper.UserMapper;
import kubacki.dawid.ReservEat.models.Reservation;
import kubacki.dawid.ReservEat.repository.ReservationRepository;
import kubacki.dawid.ReservEat.repository.RestaurantRepository;
import kubacki.dawid.ReservEat.repository.UserRepository;
import kubacki.dawid.ReservEat.service.ReservationService;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final RestaurantRepository restaurantRepository;

    @Override
    public ReservationRequest makeReservation(ReservationRequest reservationRequest) {
        System.out.println(reservationRequest.getRestaurant_id());
        var userOptional = userRepository.findById(reservationRequest.getUser_id());
        var restaurantOptional = restaurantRepository.findById(reservationRequest.getRestaurant_id());

        var reservation = Reservation.builder()
                .user(userOptional.get())
                .restaurant(restaurantOptional.get())
                .date(reservationRequest.getDate())
                .hour(reservationRequest.getHour())
                .number_of_people(reservationRequest.getNumber_of_people())
                .build();
        Reservation savedReservation = reservationRepository.save(reservation);
        return ReservationMapper.mapToReservationRequest(savedReservation);
    }

    @Override
    public List<ReservationRequest> getActualReservations(int user_id){
        List<Reservation> reservations = reservationRepository.findActualReservations(user_id);
        return reservations.stream().map((reservation -> ReservationMapper.mapToReservationRequest(reservation))).collect(Collectors.toList());
    }

    @Override
    public List<ReservationRequest> getPastReservations(int user_id){
        List<Reservation> reservations = reservationRepository.findPastReservations(user_id);
        return reservations.stream().map((reservation -> ReservationMapper.mapToReservationRequest(reservation))).collect(Collectors.toList());
    }
}
