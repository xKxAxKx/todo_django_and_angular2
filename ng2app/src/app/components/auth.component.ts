import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { AuthService } from '../services/auth.service';
import { LoginUser } from '../models/models';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/auth.component.html',
  styleUrls: ['../static/auth.component.css']
})
export class AuthComponent {
  loginuser: LoginUser[] = [];

  constructor(
    private authService: AuthService,
  ){}

  login(): void{

  }

  logout(): void{

  }

  signup(): void{

  }

  deleteUser(): void{

  }

  editUser(): void{

  }

}
