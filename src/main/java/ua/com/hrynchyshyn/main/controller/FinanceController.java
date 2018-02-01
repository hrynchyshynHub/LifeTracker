package ua.com.hrynchyshyn.main.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.com.hrynchyshyn.main.domain.Finance;
import ua.com.hrynchyshyn.main.service.FinanceService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/finance")
public class FinanceController {
    private static  final Logger LOGGER = LoggerFactory.getLogger(FinanceController.class);

    @Autowired
    private FinanceService financeService;

    @GetMapping("/getAll")
    public @ResponseBody List<Finance> getFinance(){
        LOGGER.info("get all finance method is executing....");
        financeService.findAllFinance().forEach(System.out::print);
        return (List<Finance>)financeService.findAllFinance();
    }

    @PostMapping("/save")
    public void save(@RequestParam int value){
        financeService.addFinance(new Finance(value));
    }

}
