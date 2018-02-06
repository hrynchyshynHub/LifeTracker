import { Component, OnInit,Output, Input, EventEmitter} from '@angular/core';
import {Sigarets} from "../Sigarets";
import {CalculatorService} from "../service/calculator.service";


@Component({
  selector: 'app-smoke-calculator',
  templateUrl: './smoke-calculator.component.html',
  styleUrls: ['./smoke-calculator.component.css']
})
export class SmokeCalculatorComponent implements OnInit {

  @Input() smokedSigaretsSize;
  sigaretsHistory: Sigarets[];
  // @Output() smokedSigaretsChanges = new EventEmitter<number>();



  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.calculatorService.getSigaretsHistory().subscribe(data => this.sigaretsHistory = data);
    console.log(this.sigaretsHistory);
  }

  inc(){
    this.smokedSigaretsSize++;
    // this.smokedSigaretsChanges.emit(this.smokedSigaretsSize);
    this.calculatorService.updateSigaretsCounter(new Sigarets(this.smokedSigaretsSize))
  }

  dec(){
    this.smokedSigaretsSize--;    // this.smokedSigaretsChanges.emit(this.smokedSigaretsSize);
    this.calculatorService.updateSigaretsCounter(new Sigarets(this.smokedSigaretsSize))
  }


}
