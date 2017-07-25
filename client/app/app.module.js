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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var play_module_1 = require('./play/play.module');
var admin_module_1 = require('./admin/admin.module');
var home_component_1 = require('./components/home/home.component');
var page_not_found_component_1 = require('./components/page-not-found.component');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
//importante AppRoutingModule debe ir al final para respetar los routes y evitar que el 404 sobre escriba las otras, esto por:
//The router selects the route with a first match wins strategy. Wildcard routes are the least specific routes in the route configuration. Be sure it is the last route in the configuration.
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [ng_bootstrap_1.NgbModule.forRoot(), platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, play_module_1.PlayModule, admin_module_1.AdminModule, app_routing_1.AppRoutingModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, page_not_found_component_1.PageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map