import { Component, OnInit } from '@angular/core';
import {Finance} from "../Finance";
import {FinanceService} from "../service/finance.service";

@Component({
  selector: 'app-finanse-manager',
  templateUrl: './finanse-manager.component.html',
  styleUrls: ['./finanse-manager.component.css'],
})
export class FinanseManagerComponent implements OnInit {

  finances : Finance[];
  selectedFinance: Finance;

  constructor(private financeService: FinanceService) { }

  ngOnInit() {
    this.getAllFinances();
  }

  onSelect(finance : Finance){
    this.selectedFinance = finance;
  }

  getAllFinances(): void {
    this.financeService.getAllFinances()
        .subscribe( finance => this.finances = finance);
  }

}
