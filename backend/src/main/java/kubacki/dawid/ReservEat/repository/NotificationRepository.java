package kubacki.dawid.ReservEat.repository;

import kubacki.dawid.ReservEat.models.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
    @Override
    Optional<Notification> findById(Integer integer);
}
