import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';

import { UserService } from './users/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
