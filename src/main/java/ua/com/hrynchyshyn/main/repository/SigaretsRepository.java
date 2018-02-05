package ua.com.hrynchyshyn.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ua.com.hrynchyshyn.main.domain.Sigarets;

@Repository
public interface SigaretsRepository extends JpaRepository<Sigarets, Integer> {

    @Query("SELECT s FROM Sigarets s WHERE s.localDate = :#{T(java.time.LocalDate).now()}")
    Sigarets findSigaretsByLocalDate();
}
