import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {of} from 'rxjs/observable/of';
import {Observable} from "rxjs/Observable";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {catchError, map, tap} from 'rxjs/operators';
import {FINANCE} from "../mock-finance";
import {Finance} from "../Finance";
import {Sigarets} from "../Sigarets";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class CalculatorService {
  private calculatorUrl = '/api/v1/calculator';


  constructor(private messageService: MessageService,
              private http: HttpClient) {
  }


  public updateSigaretsCounter(sigarets: Sigarets): Observable<Sigarets> {
    return this.http.post<Sigarets>(this.calculatorUrl + '/saveOeUpdateSigarets', sigarets, httpOptions);
  }

  public getSigaretsHistory(): Observable<Sigarets[]>{
    return this.http.get<Sigarets[]>(this.calculatorUrl + '/getAllSigaretsHistory');
  }

  private log(message: string) {
    this.messageService.add('CalculatorService: ' + message);
  }

}
