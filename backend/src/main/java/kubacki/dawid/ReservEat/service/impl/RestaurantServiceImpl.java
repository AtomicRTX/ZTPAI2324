package kubacki.dawid.ReservEat.service.impl;

import kubacki.dawid.ReservEat.dto.RestaurantDto;
import kubacki.dawid.ReservEat.exception.ResourceNotFoundException;
import kubacki.dawid.ReservEat.mapper.RestaurantMapper;
import kubacki.dawid.ReservEat.models.Likes;
import kubacki.dawid.ReservEat.models.Restaurant;
import kubacki.dawid.ReservEat.models.User;
import kubacki.dawid.ReservEat.repository.LikeRepository;
import kubacki.dawid.ReservEat.repository.RestaurantRepository;
import kubacki.dawid.ReservEat.repository.UserRepository;
import kubacki.dawid.ReservEat.service.RestaurantService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class RestaurantServiceImpl implements RestaurantService {

    private final UserRepository userRepository;
    private final RestaurantRepository restaurantRepository;
    private final LikeRepository likeRepository;

    @Override
    public RestaurantDto createRestaurant(RestaurantDto restaurantDto) {
        Restaurant restaurant = RestaurantMapper.mapToRestaurant(restaurantDto);
        Restaurant savedRestaurant = restaurantRepository.save(restaurant);
        return RestaurantMapper.mapToRestaurantDto(savedRestaurant);
    }

    @Override
    public RestaurantDto getRestaurantById(int id) {
        Restaurant restaurant = restaurantRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Restaurant not found with id : " + id));
        return RestaurantMapper.mapToRestaurantDto(restaurant);
    }

    @Override
    public List<RestaurantDto> getAllRestaurants() {
        List<Restaurant> restaurants = restaurantRepository.findAll();
        return restaurants.stream().map((restaurant -> RestaurantMapper.mapToRestaurantDto(restaurant))).collect(Collectors.toList());
    }

    @Override
    public List<RestaurantDto> getBestRestaurants() {
        List<Restaurant> bestRestaurants = restaurantRepository.findBestRestaurants();
        return bestRestaurants.stream().map((restaurant -> RestaurantMapper.mapToRestaurantDto(restaurant))).collect(Collectors.toList());
    }

    @Override
    public List<RestaurantDto> getRestaurantsByCategory(String categoryName) {
        List<Restaurant> catRestaurants = restaurantRepository.findRestaurantsByCategory(categoryName);
        return catRestaurants.stream().map((restaurant -> RestaurantMapper.mapToRestaurantDto(restaurant))).collect(Collectors.toList());
    }

    @Override
    public void likeRestaurant(int user_id, int res_id){
        Restaurant restaurant = restaurantRepository.findById(res_id)
                .orElseThrow(()-> new ResourceNotFoundException("Restaurant not found with id : " + res_id));
        User user = userRepository.findById(user_id)
                .orElseThrow(() -> new RuntimeException("User not found."));
        Likes like = likeRepository.findByUserAndRestaurant(user, restaurant);

        if (like != null) {
            likeRepository.delete(like);
            restaurant.dislike();
        } else {
            Likes l = new Likes();
            l.setUser(user);
            l.setRestaurant(restaurant);
            likeRepository.save(l);
            restaurant.like();
        }

        restaurantRepository.save(restaurant);
    }
}
