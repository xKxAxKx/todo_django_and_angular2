import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { LoginUser } from '../models/models';

@Component({
  selector: 'header',
  templateUrl: '../templates/header.component.html',
  styleUrls: ['../static/header.component.css']
})
export class HeaderComponent {
  constructor(
    private router: Router,
  ){

  }

  ngOnInit() {

  }

}
