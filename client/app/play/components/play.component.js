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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var play_service_1 = require('../services/play.service');
var Rx_1 = require('rxjs/Rx');
var PlayComponent = (function () {
    function PlayComponent(renderer, playService, ngbModal) {
        this.renderer = renderer;
        this.playService = playService;
        this.ngbModal = ngbModal;
        this.teamAnswers = [{ good: [], bad: [] }, { good: [], bad: [] }];
        this._reset();
    }
    //solicitamos un termino aleatorio
    PlayComponent.prototype.getOneTerm = function () {
        var _this = this;
        this.playService.getRandomTerm()
            .subscribe(function (term) {
            _this.teamTurn = (_this.teamTurn);
            _this.text = term.text;
            _this.startTime();
            _this.isFinished = false;
        });
    };
    PlayComponent.prototype.startTime = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(0, 1000);
        this.timer = timer.subscribe(function (t) {
            var current = (_this.limitTime - t);
            if (current == 0) {
                _this._stopTime();
                _this.renderer.invokeElementMethod(_this.btnStopTimerRef.nativeElement, 'click', []);
            }
            _this.time = current;
        });
    };
    PlayComponent.prototype._stopTime = function () {
        this.timer.unsubscribe();
        this.isFinished = true;
    };
    PlayComponent.prototype._setAnswer = function (answer) {
        if (answer == true) {
            this.teamAnswers[this.teamTurn]['good'].push(this.text);
        }
        else {
            this.teamAnswers[this.teamTurn]['bad'].push(this.text);
        }
        this._reset();
    };
    PlayComponent.prototype._reset = function () {
        this.text = '';
        this.limitTime = 60;
        this.time = 0;
        this.isFinished = true;
        this.teamTurn = (this.teamTurn == 0 ? 1 : 0);
    };
    PlayComponent.prototype.openModal = function (content) {
        var _this = this;
        this._stopTime();
        this.ngbModal.open(content).result.then(function (result) {
            _this._setAnswer(result);
        });
    };
    PlayComponent.prototype._setTeamTurn = function () {
        this.teamTurn = (this.teamTurn == 0 ? 1 : 0);
    };
    __decorate([
        core_1.ViewChild('btnStopTimer'), 
        __metadata('design:type', Object)
    ], PlayComponent.prototype, "btnStopTimerRef", void 0);
    PlayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'play, [ngb-accordion]',
            templateUrl: 'play.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, play_service_1.PlayService, ng_bootstrap_1.NgbModal])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=play.component.js.map