package kubacki.dawid.ReservEat.repository;


import kubacki.dawid.ReservEat.models.Type;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TypeRepository extends JpaRepository<Type, Integer> {
    @Override
    Optional<Type> findById(Integer id);
}
