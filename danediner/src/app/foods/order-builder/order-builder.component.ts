import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-builder',
  templateUrl: './order-builder.component.html',
  styleUrls: ['./order-builder.component.scss'],
})
export class OrderBuilderComponent implements OnInit {

 @Output() purchaseEvent = new EventEmitter<string>(); // sent a string to the parent via an Event
 @Input() orderChild: string;
 items = 'no items yet'; // string sent to the parent

  constructor() { }

  getItems() {
    this.items = this.orderChild;
    this.purchaseEvent.emit(this.items);
  }

  ngOnInit() {}

}
