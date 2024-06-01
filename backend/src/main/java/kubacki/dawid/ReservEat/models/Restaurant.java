package kubacki.dawid.ReservEat.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
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

    @Column(columnDefinition = "TEXT")
    private String res_map;

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

    public Restaurant(int resId, String resName, String resLocation, String resLogo, String resMap, String resD, int resLike, LocalTime startHour, LocalTime endHour) {
        this.res_id = resId;
        this.res_name = resName;
        this.res_location = resLocation;
        this.res_logo = resLogo;
        this.res_map = resMap;
        this.res_d = resD;
        this.res_like = resLike;
        this.start_hour = startHour;
        this.end_hour = endHour;
    }
}
