import { Injectable } from '@angular/core';
import {FINANCE} from "../mock-finance";
import {Finance} from "../Finance";
import { of } from 'rxjs/observable/of';
import {Observable} from "rxjs/Observable";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';



@Injectable()
export class FinanceService {

  private financeUrl = 'api/v1/finance';

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

   getAllFinances() : Observable<Finance[]> {
    this.log('fetched finances');
    return this.http.get<Finance[]>(this.financeUrl + '/getAll')
               .pipe(
                 tap(finances => this.log(`fetched finances`)),
                 catchError(this.handleError('getFinance', []))
               );
  }

  getFinance(id: number): Observable<Finance>{
    this.log(`fetched finance id = ${id}`);
    return of(FINANCE.find(finance => finance.id === id));
  }

  private log(message: string){
    this.messageService.add('FinanceService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
