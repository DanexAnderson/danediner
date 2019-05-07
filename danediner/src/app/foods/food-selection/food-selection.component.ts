import { Component, OnInit, Output } from '@angular/core';
import { FoodsService } from '../food/foods.service';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.scss'],
})
export class FoodSelectionComponent implements OnInit {

  @Output() orderParent = 'nothing yet';  // Parent Output data to child
  items = '';
  foodCat = '';
  constructor(private foodsService: FoodsService) { }


  onOrder(order) {

    return this.orderParent = order;
  }

  getPurchase($event) {
    this.items = $event;  // get data from child
  }

ngOnInit() {

   this.foodsService.getFoodCat().subscribe(cat => this.foodCat = cat);
}

}
