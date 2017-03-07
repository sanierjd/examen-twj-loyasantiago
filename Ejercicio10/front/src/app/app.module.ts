import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MasterURLService} from "./services/master-url.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routes";
import { AgarreComponent } from './agarre/agarre.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgarreComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [MasterURLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
