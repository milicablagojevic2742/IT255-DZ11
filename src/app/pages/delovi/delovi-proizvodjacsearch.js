"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Blagojevic Milica on 18-May-17.
 */
var core_1 = require("@angular/core");
var DeloviProizvidjacSearch = (function () {
    function DeloviProizvidjacSearch() {
    }
    DeloviProizvidjacSearch.prototype.transform = function (value, anotherValue) {
        if (value == null) {
            return null;
        }
        if (anotherValue !== undefined) {
            return value.filter(function (item) {
                return item['manufacturer'].toLowerCase().indexOf(anotherValue.toLowerCase()) !== -1;
            });
        }
        else {
            return value;
        }
    };
    return DeloviProizvidjacSearch;
}());
DeloviProizvidjacSearch = __decorate([
    core_1.Pipe({
        name: 'SearchProizvodjacDelovi'
    })
], DeloviProizvidjacSearch);
exports.DeloviProizvidjacSearch = DeloviProizvidjacSearch;
//# sourceMappingURL=delovi-proizvodjacsearch.js.map