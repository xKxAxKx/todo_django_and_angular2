import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginUser } from '../models/models';

@Injectable()
export class AuthService {
  loginuser: LoginUser[] = [];
  private AuthUrl = `http://127.0.0.1:8000/api-auth/`

  login(username:string, password:string) {

  }
}
