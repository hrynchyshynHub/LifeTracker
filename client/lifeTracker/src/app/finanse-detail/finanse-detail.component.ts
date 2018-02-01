import {Component, Input, OnInit} from '@angular/core';
import {Finance} from "../Finance";

@Component({
  selector: 'app-finanse-detail',
  templateUrl: './finanse-detail.component.html',
  styleUrls: ['./finanse-detail.component.css']
})
export class FinanseDetailComponent implements OnInit {

  @Input() finance: Finance;

  constructor() { }

  ngOnInit() {
  }

}
