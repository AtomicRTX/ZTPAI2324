package kubacki.dawid.ReservEat.repository;

import kubacki.dawid.ReservEat.models.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    @Override
    Optional<Restaurant> findById(Integer id);
}
