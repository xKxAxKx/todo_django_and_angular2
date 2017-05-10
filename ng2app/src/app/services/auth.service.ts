import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  userProfile: Object;

  constructor(
    private router: Router,
  ) {

  }
}
