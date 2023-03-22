import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseCurrencyDto} from "../dto/response.currency.dto";
import { environment } from '../../environments/environment.docker';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  //conversionesURL="http://localhost:8008/paginas?";
  constructor(private http: HttpClient) {
  }

  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto> {
    return this.http.get<ResponseCurrencyDto>(`${environment.BACKEND_URL}/api/currency/exchange?from=`
      + from + "&to=" + to + "&amount=" + amount);
  }
  public conversiones(page: number, size: number, sort: string, asc: boolean): Observable<any> {
    return this.http.get<any>(`${environment.BACKEND_URL}/paginas?page=${page}&size=${size}&sort=${sort}&asc=${asc}`);
  }
}
