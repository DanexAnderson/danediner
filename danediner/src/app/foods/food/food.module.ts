import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FoodSelectionComponent } from '../food-selection/food-selection.component';
import { OrderBuilderComponent } from '../order-builder/order-builder.component';
import { IonicModule } from '@ionic/angular';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  { path: '', component: FoodSelectionComponent }
];

@NgModule({
  declarations: [
    FoodSelectionComponent,
    OrderBuilderComponent
  ],
  imports: [
    CommonModule, IonicModule,
    RouterModule.forChild(routes),
    MatButtonModule,
  ]
})
export class FoodModule { }
