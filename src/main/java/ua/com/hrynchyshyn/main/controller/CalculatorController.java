package ua.com.hrynchyshyn.main.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ua.com.hrynchyshyn.main.domain.Sigarets;
import ua.com.hrynchyshyn.main.service.SigaretsService;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/v1/calculator")
@AllArgsConstructor
public class CalculatorController {

    private final SigaretsService sigaretsService;

    @GetMapping("/getSigaretsForToday")
    public Sigarets findSigaretsByLocalDateBetween() {
        return this.sigaretsService.findSigaretsByLocalDate();
    }

    @PostMapping("/saveSigarets")
    public Sigarets saveSigarets(@RequestBody Sigarets sigarets) {
        sigarets.setLocalDate(LocalDate.now());
        return this.sigaretsService.save(sigarets);
    }

    @PutMapping("/updateSigarets/{id}")
    public Sigarets updateSigaretsCounter(@PathVariable("id") Integer id, @RequestBody Sigarets sigarets) throws Exception {
        sigarets.setLocalDate(LocalDate.now());
        return this.sigaretsService.findById(id)
            .map(s -> {
                s.setCount(sigarets.getCount());
                return this.sigaretsService.save(s);
            })
            .orElseThrow(Exception::new);
    }
}
