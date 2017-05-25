"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Blagojevic Milica on 07-May-17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pocetna_component_1 = require("./pages/pocetna/pocetna.component");
var opis_component_1 = require("./pages/opis/opis.component");
var delovi_component_1 = require("./pages/delovi/delovi.component");
var dodajDelove_component_1 = require("./pages/dodajDelove/dodajDelove.component");
var kontakt_component_1 = require("./pages/kontakt/kontakt.component");
var routes = [
    { path: '', redirectTo: '/pocetna', pathMatch: 'full' },
    { path: 'pocetna', component: pocetna_component_1.PocetnaComponent },
    { path: 'opis', component: opis_component_1.OpisComponent },
    { path: 'delovi', component: delovi_component_1.DeloviComponent },
    { path: 'dodajDelove', component: dodajDelove_component_1.DodajDeloveComponent },
    { path: 'kontakt', component: kontakt_component_1.KontaktComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map