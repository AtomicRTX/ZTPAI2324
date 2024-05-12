package kubacki.dawid.ReservEat.service;

import kubacki.dawid.ReservEat.dto.RestaurantDto;
import kubacki.dawid.ReservEat.models.Restaurant;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RestaurantService {
    RestaurantDto createRestaurant(RestaurantDto restaurantDto);
    RestaurantDto getRestaurantById(int id);
    List<RestaurantDto> getAllRestaurants();

    List<RestaurantDto> getBestRestaurants();
}
