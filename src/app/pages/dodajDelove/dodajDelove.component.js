/**
 * Created by Blagojevic Milica on 24-May-17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var DodajDeloveComponent = (function () {
    function DodajDeloveComponent(http, router) {
        this.dodajDeoForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            price: new forms_1.FormControl(),
            manufacturer: new forms_1.FormControl(),
            type: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
    }
    DodajDeloveComponent.prototype.dodaj = function () {
        var _this = this;
        this.data = 'name=' + this.dodajDeoForm.value.name + '&price=' + this.dodajDeoForm.value.price
            + '&manufacturer=' + this.dodajDeoForm.value.manufacturer + '&type=' + this.dodajDeoForm.value.type;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/IT255-DZ10/dodajDeo.php', this.data, { headers: this.headers })
            .subscribe(function (data) {
            if (data['_body'] === 'ok') {
                _this.router.navigate(['']);
            }
        });
        alert('Uspesno ste uneli deo!');
    };
    return DodajDeloveComponent;
}());
DodajDeloveComponent = __decorate([
    core_1.Component({
        selector: 'dodajDelove',
        templateUrl: "./dodajDelove.component.html",
        styleUrls: ['./dodajDelove.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], DodajDeloveComponent);
exports.DodajDeloveComponent = DodajDeloveComponent;
//# sourceMappingURL=dodajDelove.component.js.map