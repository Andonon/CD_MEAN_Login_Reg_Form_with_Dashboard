import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { User } from './user';

import 'rxjs'

@Injectable()
export class UserService {
   
  constructor(private http: Http) { }
  
  register(user: User){
    return this.http.post('/register', user)
            .map(data => data.json())
            .toPromise();
  }
  login(user: User){
    return this.http.post('/login', user)
            .map(data => data.json())
            .toPromise();
  }
  get_logged_in_user(){
    return this.http.get('/get_logged_in_user')
            .map(data => data.json())
            .toPromise();
  }
 
}
