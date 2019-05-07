import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  private foodCatListner = new BehaviorSubject('no category selected yet'); // initialized Observable
  private test = new Subject<number>(); // Observable


  getFoodCat() {
    return this.foodCatListner.asObservable();  // return current variable value
  }


  setFoodCat(cat) {
    this.foodCatListner.next(cat); // set updated variable value
  }

  constructor() { }
}
