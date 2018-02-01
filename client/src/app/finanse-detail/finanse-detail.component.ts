import {Component, Input, OnInit} from '@angular/core';
import {Finance} from "../Finance";
import { Location } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {FinanceService} from "../service/finance.service";

@Component({
  selector: 'app-finanse-detail',
  templateUrl: './finanse-detail.component.html',
  styleUrls: ['./finanse-detail.component.css'],
  providers: [Location]
})
export class FinanseDetailComponent implements OnInit {

  finance: Finance;

  constructor(private route: ActivatedRoute,
              private financeService: FinanceService,
              private location: Location) { }

  ngOnInit() {
    this.getFinance();
  }

  getFinance(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.financeService.getFinance(id)
        .subscribe( finance => this.finance = finance);
  }

  goBack(): void{
    this.location.back();
  }

}
