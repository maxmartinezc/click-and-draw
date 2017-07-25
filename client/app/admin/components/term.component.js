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
var term_service_1 = require('../services/term.service');
var TermComponent = (function () {
    function TermComponent(termService) {
        this.termService = termService;
    }
    TermComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.termService.getTerms()
            .subscribe(function (terms) {
            _this.terms = terms;
        });
    };
    //save/update
    TermComponent.prototype.saveTerm = function () {
        event.preventDefault();
        if (!this.id) {
            this.addTerm();
        }
        else {
            this.updateTerm();
        }
    };
    //add
    TermComponent.prototype.addTerm = function () {
        var _this = this;
        var newTerm = {
            text: this.text,
            isAvailable: true
        };
        this.termService.addTerm(newTerm)
            .subscribe(function (term) {
            _this.terms.push(term);
            _this._resetForm();
        });
    };
    //update
    TermComponent.prototype.updateTerm = function () {
        var _this = this;
        var terms = this.terms;
        var _term = {
            _id: this.id,
            text: this.text,
            isAvailable: this.isAvailable
        };
        this.termService.updateTerm(_term)
            .subscribe(function (data) {
            //si se removió un registro (data.n), iteramos los registros de "terms"
            if (data.n == 1) {
                //iteramos el array que contiene los terminos en pantalla
                for (var i = 0; i < terms.length; i++) {
                    //si coincide el id con el registro eliminado
                    if (terms[i]._id == _term._id) {
                        //lo quitamos del array
                        terms[i].text = _this.text;
                        terms[i].isAvailable = _this.isAvailable;
                    }
                }
            }
            _this._resetForm();
        });
    };
    //delete
    TermComponent.prototype.deleteTerm = function (id) {
        var terms = this.terms;
        this.termService.deleteTerm(id)
            .subscribe(function (data) {
            //si se removió un registro (data.n), iteramos los registros de "terms"
            if (data.n == 1) {
                //iteramos el array que contiene los terminos en pantalla
                for (var i = 0; i < terms.length; i++) {
                    //si coincide el id con el registro eliminado
                    if (terms[i]._id == id) {
                        //lo quitamos del array
                        terms.splice(i, 1);
                    }
                }
            }
        });
    };
    //poblar el formulario
    TermComponent.prototype.populateForm = function (term) {
        this.id = term._id;
        this.text = term.text;
        this.isAvailable = term.isAvailable;
    };
    //resetear el formulario
    TermComponent.prototype._resetForm = function () {
        this.text = '';
        this.isAvailable = false;
        this.id = '';
    };
    TermComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'terms',
            templateUrl: 'term.component.html'
        }), 
        __metadata('design:paramtypes', [term_service_1.TermService])
    ], TermComponent);
    return TermComponent;
}());
exports.TermComponent = TermComponent;
//# sourceMappingURL=term.component.js.map