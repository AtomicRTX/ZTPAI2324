package kubacki.dawid.ReservEat.repository;

import kubacki.dawid.ReservEat.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    @Query("SELECT r FROM Reservation r JOIN r.user u WHERE TO_TIMESTAMP(CONCAT(r.date, ' ', r.hour), 'YYYY-MM-DD HH24:MI:SS') > CURRENT_TIMESTAMP AND u.user_id = :user_id ORDER BY r.date ASC, r.hour ASC")
    List<Reservation> findActualReservations(@Param("user_id") int user_id);

    @Query("SELECT r FROM Reservation r JOIN r.user u WHERE TO_TIMESTAMP(CONCAT(r.date, ' ', r.hour), 'YYYY-MM-DD HH24:MI:SS') < CURRENT_TIMESTAMP AND u.user_id = :user_id")
    List<Reservation> findPastReservations(@Param("user_id") int user_id);
}
