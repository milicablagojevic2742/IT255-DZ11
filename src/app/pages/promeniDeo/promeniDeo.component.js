/**
 * Created by Blagojevic Milica on 08-Jun-17.
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
var PromeniDeoComponent = (function () {
    function PromeniDeoComponent(route, http, router) {
        this.promeniDeoForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            price: new forms_1.FormControl(),
            manufacturer: new forms_1.FormControl(),
            type: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        this.route = route;
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['']);
        }
    }
    PromeniDeoComponent.prototype.promeni = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            var headers = new http_1.Headers();
            _this.data = 'id=' + id + '&name=' + _this.promeniDeoForm.value.name + '&price=' + _this.promeniDeoForm.value.price +
                '&manufacturer=' + _this.promeniDeoForm.value.manufacturer + '&type=' + _this.promeniDeoForm.value.type;
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('token', localStorage.getItem('token'));
            _this.http.post('http://localhost/IT255-DZ10/php/promeniDeo.php', _this.data, { headers: headers })
                .map(function (res) { return res; })
                .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                if (_this.postResponse['_body'].indexOf('error') === -1) {
                    _this.router.navigate(['']);
                }
                else {
                    alert('Neuspesna izmena dela');
                }
            });
        });
    };
    PromeniDeoComponent.prototype.vrati = function () {
        this.router.navigate(['/delovi']);
    };
    return PromeniDeoComponent;
}());
PromeniDeoComponent = __decorate([
    core_1.Component({
        selector: 'promeniDeo',
        templateUrl: "./promeniDeo.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http, router_1.Router])
], PromeniDeoComponent);
exports.PromeniDeoComponent = PromeniDeoComponent;
//# sourceMappingURL=promeniDeo.component.js.map