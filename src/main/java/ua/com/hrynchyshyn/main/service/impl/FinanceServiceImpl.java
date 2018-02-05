package ua.com.hrynchyshyn.main.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ua.com.hrynchyshyn.main.domain.Finance;
import ua.com.hrynchyshyn.main.repository.FinanceRepository;
import ua.com.hrynchyshyn.main.service.FinanceService;

@Service
@AllArgsConstructor
public class FinanceServiceImpl implements FinanceService {

    private final FinanceRepository financeRepository;

    @Override
    public void addFinance(Finance finance) {
        this.financeRepository.save(finance);
    }

    @Override
    public Iterable<Finance> findAllFinance() {
        return this.financeRepository.findAll();
    }
}
