package ua.com.hrynchyshyn.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ua.com.hrynchyshyn.main.domain.Sigarets;

import java.time.LocalDate;

@Repository
public interface SigaretsRepository extends JpaRepository<Sigarets, Integer> {

    @Query("SELECT s FROM Sigarets s WHERE s.localDate = :#{T(java.time.LocalDate).now()}")
    Sigarets findSigaretsforToday();

    @Modifying
    @Query("update Sigarets s set s.count = ?1 where s.localDate =?2")
    int setFixedSigaretsCountFor(int count, LocalDate localDate);
}
