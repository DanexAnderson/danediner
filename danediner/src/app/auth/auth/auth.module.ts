import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: CreateEmployeeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [CreateEmployeeComponent, LoginComponent],
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
