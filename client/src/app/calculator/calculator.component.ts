import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {

  sigaretsCounter:number;

  constructor() { }

  ngOnInit() {
  }

  updateSmokesCounter(event){
    console.log(event + 'before');
    this.sigaretsCounter = event;
    console.log(event + 'after');
  }


}
