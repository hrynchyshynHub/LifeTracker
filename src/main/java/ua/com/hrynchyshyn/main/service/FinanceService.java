package ua.com.hrynchyshyn.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.com.hrynchyshyn.main.domain.Finance;
import ua.com.hrynchyshyn.main.repository.FinanceRepository;


@Service
public class FinanceService {
    @Autowired
    private FinanceRepository financeRepository;

    public void addFinance(Finance finance){
        financeRepository.save(finance);
    }
    public Iterable<Finance> findAllFinance(){
        return financeRepository.findAll();
    }
}
