package ua.com.hrynchyshyn.main.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;
import ua.com.hrynchyshyn.main.domain.Sigarets;
import ua.com.hrynchyshyn.main.repository.SigaretsRepository;
import ua.com.hrynchyshyn.main.service.SigaretsService;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SigaretsServiceImpl implements SigaretsService {

    private final SigaretsRepository sigaretsRepository;

    @Override
    public Sigarets findSigaretsByLocalDate() {
        return this.sigaretsRepository.findSigaretsByLocalDate();
    }

    @Override
    public void updateDailyInfo(Sigarets sigarets) {

    }

    @Override
    public Sigarets save(Sigarets sigarets) {
        return this.sigaretsRepository.save(sigarets);
    }

    @Override
    public Optional<Sigarets> findById(Integer id) {
        return this.sigaretsRepository.findById(id);
    }
}
