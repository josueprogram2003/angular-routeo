import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';
import { Vista3Component } from './vista3/vista3.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"Login" , component:LoginComponent},
  {path:'Vista1', component:Vista1Component},
  {path:'Vista2', component:Vista2Component},
  {path:'Vista3', component:Vista3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
