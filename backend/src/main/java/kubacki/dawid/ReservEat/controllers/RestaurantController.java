package kubacki.dawid.ReservEat.controllers;

import kubacki.dawid.ReservEat.dto.RestaurantDto;
import kubacki.dawid.ReservEat.dto.UserDto;
import kubacki.dawid.ReservEat.service.RestaurantService;
import kubacki.dawid.ReservEat.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/restaurant")
@RequiredArgsConstructor

public class RestaurantController {
    private final RestaurantService restaurantService;
    private final UserService userService;

    @PostMapping("/create")
    public ResponseEntity<RestaurantDto> createRestaurant(@RequestBody RestaurantDto restaurantDto) {
        RestaurantDto savedRestaurant = restaurantService.createRestaurant(restaurantDto);
        return new ResponseEntity<>(savedRestaurant, HttpStatus.CREATED);
    }

    @PostMapping("/{id}/like")
    public ResponseEntity<RestaurantDto> likeRestaurant(@PathVariable("id") int res_id) {
        RestaurantDto restaurantDto = restaurantService.getRestaurantById(res_id);
        UserDto userDto = userService.getByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
        restaurantService.likeRestaurant(userDto.getUser_id(), restaurantDto.getRes_id());
        return ResponseEntity.ok(restaurantDto);
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
