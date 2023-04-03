import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: FormComponent, data: {roles: ['USER']}, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, data: {roles: ['ADMIN']}, canActivate: [AuthGuard]  },
  { path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
