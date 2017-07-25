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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var play_routing_module_1 = require('./play-routing.module');
var timer_pipe_1 = require('./pipes/timer.pipe');
var play_component_1 = require('./components/play.component');
var play_service_1 = require('./services/play.service');
var PlayModule = (function () {
    function PlayModule() {
    }
    PlayModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, play_routing_module_1.PlayRoutingModule, ng_bootstrap_1.NgbModule],
            declarations: [play_component_1.PlayComponent, timer_pipe_1.TimerPipe],
            providers: [play_service_1.PlayService]
        }), 
        __metadata('design:paramtypes', [])
    ], PlayModule);
    return PlayModule;
}());
exports.PlayModule = PlayModule;
//# sourceMappingURL=play.module.js.map