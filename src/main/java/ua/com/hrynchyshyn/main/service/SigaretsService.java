package ua.com.hrynchyshyn.main.service;

import ua.com.hrynchyshyn.main.domain.Sigarets;

import java.time.LocalDateTime;
import java.util.Optional;

public interface SigaretsService {

    Sigarets findSigaretsByLocalDate();

    void updateDailyInfo(Sigarets sigarets);

    Sigarets save(Sigarets sigarets);

    Optional<Sigarets> findById(Integer id);
}
