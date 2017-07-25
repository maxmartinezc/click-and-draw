import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
}