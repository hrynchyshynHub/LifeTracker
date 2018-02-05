package ua.com.hrynchyshyn.main.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;
import ua.com.hrynchyshyn.main.domain.Sigarets;
import ua.com.hrynchyshyn.main.repository.SigaretsRepository;
import ua.com.hrynchyshyn.main.service.SigaretsService;

import java.time.LocalDateTime;
import java.util.List;
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
    public Sigarets updateDailyInfo(Sigarets sigarets) {
        Sigarets sigaretsFromDatabase = sigaretsRepository.findSigaretsByLocalDate();
        if(sigaretsFromDatabase == null){
            sigaretsRepository.saveAndFlush(sigarets);
            return sigarets;
        }else{
            sigaretsFromDatabase.setCount(sigarets.getCount());
            sigaretsRepository.save(sigaretsFromDatabase);
            return sigaretsFromDatabase;
        }
    }

    @Override
    public Sigarets save(Sigarets sigarets) {
        return this.sigaretsRepository.save(sigarets);
    }

    @Override
    public Optional<Sigarets> findById(Integer id) {
        return this.sigaretsRepository.findById(id);
    }

    @Override
    public List<Sigarets> findAll() {
        return sigaretsRepository.findAll();
    }
}
