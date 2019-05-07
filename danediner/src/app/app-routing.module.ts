import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'meals', pathMatch: 'full' },
 // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'meals', loadChildren: './foods/food/food.module#FoodModule'},
  { path: 'auth', loadChildren: './auth/auth/auth.module#AuthModule'},
  { path: 'cart', loadChildren: './items/item/item.module#ItemModule'},
  { path: 'home', loadChildren: './landing/landing/landing.module#LandingModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
