package kubacki.dawid.ReservEat.models;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "reminders")

public class Reminders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int not_id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name="reserv_id", nullable=false)
    private Reservation reservation;

    @Column()
    private String message;
}
