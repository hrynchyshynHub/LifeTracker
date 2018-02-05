package ua.com.hrynchyshyn.main.controller;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ua.com.hrynchyshyn.main.domain.Finance;
import ua.com.hrynchyshyn.main.service.FinanceService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/finance")
@AllArgsConstructor
public class FinanceController {
    private static  final Logger LOGGER = LoggerFactory.getLogger(FinanceController.class);

    private final FinanceService financeService;

    @GetMapping("/getAll")
    public List<Finance> getFinance(){
        LOGGER.info("get all finance method is executing....");
        financeService.findAllFinance().forEach(System.out::print);
        return (List<Finance>)financeService.findAllFinance();
    }

    @PostMapping("/save")
    public void save(@RequestParam("value") int value){
        financeService.addFinance(new Finance());
    }

}
