import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "../service/calculator.service";
import {Sigarets} from "../Sigarets";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {

  private sigaretsCounter:number;
  sigaretsHistory: Sigarets[];

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.getSigaretsHistoryTable();
  }

  updateSmokesCounter(event){
    this.sigaretsCounter = event;
    this.calculatorService.updateSigaretsCounter(new Sigarets(event));
  }

  getSigaretsHistoryTable(): void{
    this.calculatorService.getSigaretsHistory().subscribe(data => this.sigaretsHistory = data);
  }

}
