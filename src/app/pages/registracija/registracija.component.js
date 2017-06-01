/**
 * Created by Blagojevic Milica on 31-May-17.
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
var RegistracijaComponent = (function () {
    function RegistracijaComponent(http, router) {
        this.registerForma = new forms_1.FormGroup({
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl(),
            name: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            phone: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }
    }
    RegistracijaComponent.prototype.registracija = function () {
        var _this = this;
        this.data = 'username=' + this.registerForma.value.username + '&password=' + this.registerForma.value.password + '&name=' +
            this.registerForma.value.name + '&lastName=' + this.registerForma.value.lastName + '&email=' + this.registerForma.value.email
            + '&phone=' + this.registerForma.value.phone;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/IT255-DZ10/php/registracija.php', this.data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) {
            console.log(data);
            var obj = JSON.parse(data['_body']);
            localStorage.setItem('token', obj.token);
            alert('Uspesna registracija!');
            _this.router.navigate(['']);
        }, function (err) {
            alert('Greska');
            var obj = JSON.parse(err._body);
            var element = document.getElementsByClassName('alert')[0];
            element.style.display = 'block';
            element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
        });
    };
    return RegistracijaComponent;
}());
RegistracijaComponent = __decorate([
    core_1.Component({
        selector: 'registracija',
        templateUrl: "./registracija.component.html",
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], RegistracijaComponent);
exports.RegistracijaComponent = RegistracijaComponent;
//# sourceMappingURL=registracija.component.js.map