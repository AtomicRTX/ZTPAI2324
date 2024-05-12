package kubacki.dawid.ReservEat.controllers;

import kubacki.dawid.ReservEat.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import kubacki.dawid.ReservEat.models.Restaurant;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/restaurants")
@RequiredArgsConstructor

public class RestaurantController {
    private final RestaurantRepository restaurantRepository;

    @GetMapping("/all")
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findRestaurants();
    }
}
