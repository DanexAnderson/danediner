import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCartComponent } from '../item-cart/item-cart.component';
import { InvoiceComponent } from '../invoice/invoice.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ItemCartComponent},
  {path: 'itemcart', component: ItemCartComponent},
  {path: 'invoice', component: InvoiceComponent}
];

@NgModule({
  declarations: [ItemCartComponent, InvoiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ItemModule { }
