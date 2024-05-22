package kubacki.dawid.ReservEat.mapper;

import kubacki.dawid.ReservEat.dto.RestaurantDto;
import kubacki.dawid.ReservEat.models.Restaurant;

public class RestaurantMapper {
    public static RestaurantDto mapToRestaurantDto(Restaurant restaurant) {
        return new RestaurantDto(
                restaurant.getRes_id(),
                restaurant.getRes_name(),
                restaurant.getRes_location(),
                restaurant.getRes_logo(),
                restaurant.getRes_map(),
                restaurant.getRes_d(),
                restaurant.getRes_like(),
                restaurant.getStart_hour(),
                restaurant.getEnd_hour()
        );
    }
    public static Restaurant mapToRestaurant(RestaurantDto restaurantDto) {
        return new Restaurant(
                restaurantDto.getRes_id(),
                restaurantDto.getRes_name(),
                restaurantDto.getRes_location(),
                restaurantDto.getRes_logo(),
                restaurantDto.getRes_map(),
                restaurantDto.getRes_d(),
                restaurantDto.getRes_like(),
                restaurantDto.getStart_hour(),
                restaurantDto.getEnd_hour()
        );
    }
}
