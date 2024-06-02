package kubacki.dawid.ReservEat.service;

import kubacki.dawid.ReservEat.dto.RestaurantDto;

import java.util.List;

public interface RestaurantService {
    RestaurantDto createRestaurant(RestaurantDto restaurantDto);
    RestaurantDto getRestaurantById(int id);
    List<RestaurantDto> getAllRestaurants();

    List<RestaurantDto> getBestRestaurants();
    List<RestaurantDto> getRestaurantsByCategory(String categoryName);
    void likeRestaurant(int user_id, int res_id);
}
