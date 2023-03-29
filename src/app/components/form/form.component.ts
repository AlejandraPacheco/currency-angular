import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { ResponseCurrencyDto } from 'src/app/dto/response.currency.dto';
import { CurrencyService } from 'src/app/service/currency.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'software';

  currencyForm: FormGroup;
  responseCurrencyDto: ResponseCurrencyDto;

  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyService,
              private keycloakService: KeycloakService) {
    this.currencyForm = this.formBuilder.group({
      from: '',
      to: '',
      amount: ''
    })
  }

  submit() {
    console.log(this.currencyForm.value);
    this.currencyService.convertCurrency(this.currencyForm.value.from, this.currencyForm.value.to,
      this.currencyForm.value.amount).subscribe({
      next: (data) => {
        console.log('Invocacion exitosa');
        console.log(data);
        this.responseCurrencyDto = data;
        console.log('resultado');
        console.log(this.responseCurrencyDto.result);
      },
      error: (error) => console.log("ERROR >>> ", error)
    })
    console.log('test');
  }

  logout() {
    this.keycloakService.logout("http://localhost:4200");
  }
}
