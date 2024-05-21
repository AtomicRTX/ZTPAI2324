package kubacki.dawid.ReservEat.repository;

import kubacki.dawid.ReservEat.models.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {

    @Query("SELECT r FROM Restaurant r ORDER BY r.res_like DESC LIMIT 2")
    List<Restaurant> findBestRestaurants();

    @Query("SELECT r FROM Restaurant r JOIN r.categories c WHERE c.category_name = :categoryName")
    List<Restaurant> findRestaurantsByCategory(@Param("categoryName") String categoryName);
}
