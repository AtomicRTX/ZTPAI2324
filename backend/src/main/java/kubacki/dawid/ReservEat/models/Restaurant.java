package kubacki.dawid.ReservEat.models;

import jakarta.persistence.*;
import lombok.Getter;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Entity
@Table(name="restaurants")

public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int res_id;

    @Column()
    private String res_name;

    @Column()
    private String res_location;

    @Column()
    private String res_logo;

    @Column()
    private String res_image;

    @Column()
    private String res_d;

    @Column()
    private int res_like;

    @Column()
    private LocalTime start_hour;

    @Column()
    private LocalTime end_hour;

    @ManyToMany
    @JoinTable(
            name = "restaurants_categories",
            joinColumns = @JoinColumn(name = "res_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Category> categories = new HashSet<>();
}
