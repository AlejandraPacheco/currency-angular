import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurrencyComponent} from "./Currency/currency.component";

const routes: Routes = [
  { path: '', component: CurrencyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
