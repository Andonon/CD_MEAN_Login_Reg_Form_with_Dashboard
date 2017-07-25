import { Component, OnInit } from '@angular/core';
import { User } from './../user'
import { UserService } from './../user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  user = User;
  current_user: User

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.user_service.get_logged_in_user()
      .then(data => {
        if(data){
          this.current_user = data;
        } else {
          this.router.navigate(["/login"])
        }
      })
      .catch(err => {});
  }
}
