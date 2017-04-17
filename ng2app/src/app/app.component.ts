import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h4>{{ subtitle }}</h4>
    <router-outlet></router-outlet>
    `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Todo';
  subtitle = 'Angular2 + Django Rest Framework'
}
