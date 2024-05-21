package kubacki.dawid.ReservEat.controllers;

import kubacki.dawid.ReservEat.dto.RestaurantDto;
import kubacki.dawid.ReservEat.repository.RestaurantRepository;
import kubacki.dawid.ReservEat.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import kubacki.dawid.ReservEat.models.Restaurant;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/restaurant")
@RequiredArgsConstructor

public class RestaurantController {
    private final RestaurantService restaurantService;
    private final RestaurantRepository restaurantRepository;

    @PostMapping
    public ResponseEntity<RestaurantDto> createRestaurant(@RequestBody RestaurantDto restaurantDto) {
        RestaurantDto savedRestaurant = restaurantService.createRestaurant(restaurantDto);
        return new ResponseEntity<>(savedRestaurant, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<RestaurantDto> getRestaurantById(@PathVariable("id") int id) {
        RestaurantDto restaurantDto = restaurantService.getRestaurantById(id);
        return ResponseEntity.ok(restaurantDto);
    }

    @GetMapping("/all")
    public ResponseEntity<List<RestaurantDto>> getAllRestaurants() {
        List<RestaurantDto> restaurantDtos = restaurantService.getAllRestaurants();
        return ResponseEntity.ok(restaurantDtos);
    }

    @GetMapping("/best")
    public ResponseEntity<List<RestaurantDto>> getBestRestaurants() {
        List<RestaurantDto> bestRestaurantDtos = restaurantService.getBestRestaurants();
        return ResponseEntity.ok(bestRestaurantDtos);
    }

    @GetMapping("/category")
    public ResponseEntity<List<RestaurantDto>> getRestaurantsByCategory(@RequestParam("category") String categoryName) {
        List<RestaurantDto> catRestaurantDtos = restaurantService.getRestaurantsByCategory(categoryName);
        return ResponseEntity.ok(catRestaurantDtos);
    }


}
