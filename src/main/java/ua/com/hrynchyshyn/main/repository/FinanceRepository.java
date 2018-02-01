package ua.com.hrynchyshyn.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.com.hrynchyshyn.main.domain.Finance;

@Repository
public interface FinanceRepository extends JpaRepository<Finance, Integer> {
}
