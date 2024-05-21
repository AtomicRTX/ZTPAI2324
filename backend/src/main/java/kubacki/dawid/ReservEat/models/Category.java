package kubacki.dawid.ReservEat.models;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.Set;

@Getter
@Entity
@Table(name="categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int category_id;

    @Column(nullable = false, unique = true)
    private String category_name;

    @ManyToMany(mappedBy = "categories")
    private Set<Restaurant> restaurants;

}

