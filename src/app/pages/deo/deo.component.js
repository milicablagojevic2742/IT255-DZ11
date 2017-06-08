/**
 * Created by Blagojevic Milica on 06-Jun-17.
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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var DeoComponent = (function () {
    function DeoComponent(route, http, router) {
        this.http = http;
        this.router = router;
        this.route = route;
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['']);
        }
    }
    DeoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('token', localStorage.getItem('token'));
            _this.http.get('http://localhost/IT255-DZ10/php/getDeo.php?id=' + id, { headers: headers }).map(function (res) { return res.json(); }).share()
                .subscribe(function (data) {
                _this.data = data.red;
            }, function (err) {
                _this.router.navigate(['./']);
            });
        });
    };
    DeoComponent.prototype.vrati = function () {
        this.router.navigate(['/delovi']);
    };
    return DeoComponent;
}());
DeoComponent = __decorate([
    core_1.Component({
        selector: 'DeoComponent',
        templateUrl: './deo.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http, router_1.Router])
], DeoComponent);
exports.DeoComponent = DeoComponent;
//# sourceMappingURL=deo.component.js.map