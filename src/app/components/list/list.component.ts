import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/service/currency.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
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
