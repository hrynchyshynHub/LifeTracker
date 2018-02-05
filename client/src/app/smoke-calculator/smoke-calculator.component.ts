import { Component, OnInit,Output, Input, EventEmitter} from '@angular/core';
import {Sigarets} from "../Sigarets";


@Component({
  selector: 'app-smoke-calculator',
  templateUrl: './smoke-calculator.component.html',
  styleUrls: ['./smoke-calculator.component.css']
})
export class SmokeCalculatorComponent implements OnInit {

  @Input() smokedSigaretsSize;
  @Input() sigaretsHistoryTable: Sigarets[];
  @Output() smokedSigaretsChanges = new EventEmitter<number>();



  constructor() { }

  ngOnInit() {

  }

  inc(){
    this.smokedSigaretsSize++;
    this.smokedSigaretsChanges.emit(this.smokedSigaretsSize);
  }

  dec(){
    this.smokedSigaretsSize--;
    this.smokedSigaretsChanges.emit(this.smokedSigaretsSize);
  }


}
