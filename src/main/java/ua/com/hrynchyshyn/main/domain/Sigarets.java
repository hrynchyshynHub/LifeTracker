package ua.com.hrynchyshyn.main.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "sigas", uniqueConstraints = {
    @UniqueConstraint(name = "sigas_day", columnNames = "localDate")
})
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = {"id", "count", "localDate"})
public class Sigarets {

    @Id
    private Integer id;

    private int count;

    private LocalDate localDate;

    @Override
    public String toString() {
        return "Sigarets{" +
            "id=" + id +
            ", count=" + count +
            ", localDateTime=" + localDate +
            '}';
    }
}
