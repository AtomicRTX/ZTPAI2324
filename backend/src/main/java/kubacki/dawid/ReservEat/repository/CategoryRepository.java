package kubacki.dawid.ReservEat.repository;

import kubacki.dawid.ReservEat.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Override
    Optional<Category> findById(Integer integer);
}