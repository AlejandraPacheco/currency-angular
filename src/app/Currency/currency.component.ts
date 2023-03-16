import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CurrencyService} from "../service/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit{
  title = 'software';
  test = 'prueba';
  page = 0;
  size = 10;
  sort = "id";
  asc = true;

  isFirst = false;
  isLast = false;

  conversiones: Array<any>;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(){
    this.cargarConversiones();
  }

  cargarConversiones() {
    this.currencyService.conversiones(this.page, this.size, "id", this.asc
    ).subscribe({
      next: (data) => {
        this.conversiones = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        console.log('Invocacion exitosa');
        console.log(data);
      },
      error: (error) => console.log("ERROR >>> ", error)
    })
  }

  sortTable(){
    console.log(this.asc);
    this.asc = !this.asc;
    this.cargarConversiones();
  }

  rewind() {
    if (!this.isFirst) {
      this.page--;
      this.cargarConversiones();
    }
  }

  forward() {
    if (!this.isLast) {
      this.page++;
      this.cargarConversiones();
    }
  }
}
