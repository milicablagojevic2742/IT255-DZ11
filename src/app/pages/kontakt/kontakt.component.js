"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Blagojevic Milica on 08-May-17.
 */
var core_1 = require("@angular/core");
// declare var google: any;
var KontaktComponent = (function () {
    function KontaktComponent() {
    }
    KontaktComponent.prototype.proveri = function (ime, prezime, naslov, tekst, telefon) {
        if (ime === '') {
            alert('Polje za ime je prazno!');
        }
        if (prezime === '') {
            alert('Polje za prezime je prazno!');
        }
        if (naslov === '') {
            alert('Polje za naslov je prazno!');
        }
        if (tekst === '') {
            alert('Polje za tekst je prazno!');
        }
        if (telefon === '') {
            alert('Polje za telefon je prazno!');
        }
        if (ime !== '' && prezime !== '' && naslov !== '' && tekst !== '' && telefon !== '') {
            alert('Uspesno ste poslali poruku!');
        }
    };
    return KontaktComponent;
}());
KontaktComponent = __decorate([
    core_1.Component({
        selector: 'kontakt',
        templateUrl: './kontakt.component.html',
        styleUrls: ['./kontakt.component.css']
    })
], KontaktComponent);
exports.KontaktComponent = KontaktComponent;
//# sourceMappingURL=kontakt.component.js.map