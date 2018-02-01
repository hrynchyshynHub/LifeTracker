package ua.com.hrynchyshyn.main.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ua.com.hrynchyshyn.main.domain.Finance;

@Repository
public interface FinanceRepository extends CrudRepository<Finance, Integer>{
}
