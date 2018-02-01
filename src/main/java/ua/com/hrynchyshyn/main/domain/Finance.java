package ua.com.hrynchyshyn.main.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "finance")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Finance {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private int value;

    public Finance(int value) {
        this.value = value;
    }
}
