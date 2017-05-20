import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { LoginUser } from '../models/models';

@Injectable()
export class AuthService {
  userLogin: boolean = false;
  private AuthUrl = `http://127.0.0.1:8000/api-auth/`

  constructor(
    private http: Http
  ){}

  login(username: string, password: string) {
    return this.http
      .post(this.AuthUrl, {username: username, password: password})
      .map((response: Response) =>{
        let user = response.json();
        if (user && user.token){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userLogin = true;
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
