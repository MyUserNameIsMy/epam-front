import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import { RegisterOperatorComponent } from './register/register-operator/register-operator.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    RegisterOperatorComponent,
    LoginComponent,
    HomeComponent,
    ApplicationComponent,
    UpdatepopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
