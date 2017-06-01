import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { OpisComponent } from './pages/opis/opis.component';
import { DeloviComponent } from './pages/delovi/delovi.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { DeloviImenaSearch } from './pages/delovi/delovi-imenasearch';
import { DeloviProizvidjacSearch } from './pages/delovi/delovi-proizvodjacsearch';
import { DodajDeloveComponent } from './pages/dodajDelove/dodajDelove.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistracijaComponent } from './pages/registracija/registracija.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HeaderComponent, PocetnaComponent, OpisComponent, DeloviComponent, KontaktComponent, DeloviImenaSearch,
  DeloviProizvidjacSearch, DodajDeloveComponent, LoginComponent, RegistracijaComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
