import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterOperatorComponent} from "./register/register-operator/register-operator.component";
import {LoginComponent} from "./login/login.component";
import {ApplicationComponent} from "./application/application.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register-operator',
    component: RegisterOperatorComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'application',
    component: ApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
