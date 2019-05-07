import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../../foods/food/foods.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss'],
})
export class FoodMenuComponent implements OnInit {

  constructor(private foodsService: FoodsService) { }

  ngOnInit() {}

  onShowMainCourse() {

    this.foodsService.setFoodCat('MeatKinds');
  }

}
