import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SchedaComponent } from './scheda/scheda.component';
import { GifComponent } from './gif/gif.component';

import { RoutingModule } from '../app/routing/routing.module';
import { ModSchedaComponent } from './mod-scheda/mod-scheda.component';
import { EsercizioComponent } from './esercizio/esercizio.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { AuthServiceService } from './auth/auth-service.service';
import { HeaderComponent } from './header/header.component';
import { ListaUtentiServiceService } from './lista-utenti-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SchedaComponent,
    GifComponent,
    ModSchedaComponent,
    EsercizioComponent,
    ListaUtentiComponent,
    SignupComponent,
    SigninComponent,
    SignoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthServiceService, ListaUtentiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
