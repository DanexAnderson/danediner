import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { OpenHrsComponent } from '../open-hrs/open-hrs.component';

const routes: Routes = [
  {path: '', component: HomepageComponent}
];
@NgModule({
  declarations: [HomepageComponent, OpenHrsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingModule { }
