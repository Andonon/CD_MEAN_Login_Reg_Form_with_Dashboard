import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { Router } from '@angular/router'

import 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  new_user = new User;
  user = new User;

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    this.user_service.register(this.new_user)
      .then(() => {
        this.router.navigate(['/dashboard']);
        this.new_user = new User
      })
  }

  login(){
    this.user_service.login(this.user)
      .then(() => {
        this.router.navigate(['/dashboard']);
        this.user = new User;
      })
  }
}
