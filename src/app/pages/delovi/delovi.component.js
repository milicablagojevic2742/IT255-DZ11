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
/**
 * Created by Blagojevic Milica on 07-May-17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var DeloviComponent = (function () {
    function DeloviComponent(http) {
        this.http = http;
    }
    DeloviComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    DeloviComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('http://localhost/IT255-DZ10/deloviBaza.php')
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    return DeloviComponent;
}());
DeloviComponent = __decorate([
    core_1.Component({
        selector: 'delovi',
        templateUrl: './delovi.component.html',
        styleUrls: ['./delovi.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DeloviComponent);
exports.DeloviComponent = DeloviComponent;
//# sourceMappingURL=delovi.component.js.map