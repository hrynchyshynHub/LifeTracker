package ua.com.hrynchyshyn.main.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "finance")
@AllArgsConstructor
@NoArgsConstructor
public class Finance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String description;
    private int amount;

    @Override
    public String toString() {
        return "Finance{" +
            "id=" + id +
            ", description='" + description + '\'' +
            ", amount=" + amount +
            '}';
    }
}
