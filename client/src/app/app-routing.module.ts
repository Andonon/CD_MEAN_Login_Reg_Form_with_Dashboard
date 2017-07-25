import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './users/login/login.component'
import { DashboardComponent } from './users/dashboard/dashboard.component'

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "logout", pathMatch: 'full', redirectTo: "/login"},
  { path: "", pathMatch: "full", redirectTo: "/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
