import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { AuthService } from '../services/auth.service';
import { LoginUser } from '../models/models';

@Component({
  selector: 'header',
  templateUrl: '../templates/header.component.html',
  styleUrls: ['../static/header.component.css']
})
export class HeaderComponent {
  currentUser: LoginUser;

  constructor(
    private authService: AuthService,
    private router: Router,
  ){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
