package kubacki.dawid.ReservEat.models;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name="categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int category_id;

    @Column(nullable = false, unique = true)
    private String category_name;

}

