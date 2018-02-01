import { Injectable } from '@angular/core';
import {FINANCE} from "../mock-finance";
import {Finance} from "../Finance";
import { of } from 'rxjs/observable/of';
import {Observable} from "rxjs/Observable";
import {MessageService} from "./message.service";


@Injectable()
export class FinanceService {

  constructor(private messageService: MessageService) { }

   getAllFinances() : Observable<Finance[]> {
    this.messageService.add('Finance Service: fetched finances');
    return of(FINANCE);
  }

  getFinance(id: number): Observable<Finance>{
    this.messageService.add(`FinanceService: fetched finance id = ${id}`);
    return of(FINANCE.find(finance => finance.id === id));
  }

}
