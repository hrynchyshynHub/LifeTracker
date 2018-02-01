package ua.com.hrynchyshyn.main.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "finance")
@AllArgsConstructor
public class Finance {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String description;
    private int amount;

    public Finance(){}

    public Finance(int value) {
        this.amount = value;
        this.description = "LAlA";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Finance{" +
            "id=" + id +
            ", description='" + description + '\'' +
            ", amount=" + amount +
            '}';
    }
}
