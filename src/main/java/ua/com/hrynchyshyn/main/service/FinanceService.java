package ua.com.hrynchyshyn.main.service;

import ua.com.hrynchyshyn.main.domain.Finance;

public interface FinanceService {

    void addFinance(Finance finance);

    Iterable<Finance> findAllFinance();
}
