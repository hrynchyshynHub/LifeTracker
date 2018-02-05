import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private sigaretsCounter:number;

  constructor() { }

  ngOnInit() {
  }

  updateSmokesCounter(event){
    this.sigaretsCounter = event;
  }

}
