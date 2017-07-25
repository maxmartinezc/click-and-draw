import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PlayModule } from './play/play.module';
import { AdminModule } from './admin/admin.module';
import { HomeComponent }  from './components/home/home.component';
import { PageNotFoundComponent }  from './components/page-not-found.component';
import { AppComponent }  from './app.component';
import { AppRoutingModule }   from './app.routing';

//importante AppRoutingModule debe ir al final para respetar los routes y evitar que el 404 sobre escriba las otras, esto por:
//The router selects the route with a first match wins strategy. Wildcard routes are the least specific routes in the route configuration. Be sure it is the last route in the configuration.
@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, HttpModule, FormsModule, PlayModule, AdminModule, AppRoutingModule],
  declarations: [ AppComponent, HomeComponent, PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }