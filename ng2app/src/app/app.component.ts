import { Component } from '@angular/core';

import { LoginUser } from './models/models';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <header header></header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor(
    private authService: AuthService,
  ){}

  ngOnInit() {
    if(localStorage.getItem('currentUser')) {
      this.authService.userLogin = true;
    }
  }
}
