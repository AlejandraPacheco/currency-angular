import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ResponseCurrencyDto} from "./dto/response.currency.dto";
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'software';
  test = 'prueba';

  currencyForm: FormGroup;
  responseCurrencyDto: ResponseCurrencyDto;

  constructor(private formBuilder: FormBuilder, private keycloakService: KeycloakService) {
   
  }

  logout() {
    this.keycloakService.logout("http://localhost:4200");
  }
}
