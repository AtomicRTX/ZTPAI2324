package kubacki.dawid.ReservEat.repository;

import kubacki.dawid.ReservEat.models.Likes;
import kubacki.dawid.ReservEat.models.Restaurant;
import kubacki.dawid.ReservEat.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Likes, Integer> {

    Likes findByUserAndRestaurant(User user, Restaurant restaurant);
}
