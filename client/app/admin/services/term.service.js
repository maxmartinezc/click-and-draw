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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var TermService = (function () {
    function TermService(http) {
        this.http = http;
    }
    //read
    TermService.prototype.getTerms = function () {
        return this.http.get('/api/terms')
            .map(function (res) { return res.json(); });
    };
    //create
    TermService.prototype.addTerm = function (newTerm) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/terms', JSON.stringify(newTerm), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //update
    TermService.prototype.updateTerm = function (term) {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.put('/api/terms/' + term._id, JSON.stringify(term), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete
    TermService.prototype.deleteTerm = function (id) {
        return this.http.delete('/api/terms/' + id)
            .map(function (res) { return res.json(); });
    };
    TermService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TermService);
    return TermService;
}());
exports.TermService = TermService;
//# sourceMappingURL=term.service.js.map