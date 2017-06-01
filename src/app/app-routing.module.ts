/**
 * Created by Blagojevic Milica on 07-May-17.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { OpisComponent } from './pages/opis/opis.component';
import { DeloviComponent } from './pages/delovi/delovi.component';
import { DodajDeloveComponent } from './pages/dodajDelove/dodajDelove.component';
import {KontaktComponent} from './pages/kontakt/kontakt.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistracijaComponent } from './pages/registracija/registracija.component';

const routes: Routes = [
  { path: '', redirectTo: '/pocetna', pathMatch: 'full'},
  { path: 'pocetna', component: PocetnaComponent},
  { path: 'opis', component: OpisComponent},
  { path: 'delovi', component: DeloviComponent},
  { path: 'dodajDelove', component: DodajDeloveComponent},
  { path: 'kontakt', component: KontaktComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registracija', component: RegistracijaComponent}
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
