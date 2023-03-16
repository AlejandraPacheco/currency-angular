import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseCurrencyDto} from "../dto/response.currency.dto";
import { environment } from '../../environments/environment.docker';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto> {
    return this.http.get<ResponseCurrencyDto>(`${environment.BACKEND_URL}/api/currency/exchange?from=`
      + from + "&to=" + to + "&amount=" + amount);
  }
}
