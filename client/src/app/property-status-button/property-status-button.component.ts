import { Component, OnInit, Input } from '@angular/core';
import { PropertyRecord } from '../model/property-record';

enum statesEnum {
  FOR_RENT,
  FOR_SALE,
  FOR_SALE_RENT
}

@Component({
  selector: 'app-property-status-button',
  templateUrl: './property-status-button.component.html',
  styleUrls: ['./property-status-button.component.scss']
})
export class PropertyStatusButtonComponent implements OnInit {
  @Input() property: PropertyRecord;
  currentState: statesEnum;
  allStates = statesEnum;

  constructor() {}

  ngOnInit() {
    this.currentState = this.getPropertyState();
  }

  /* Fetches the Current State of the property */
  getPropertyState(): statesEnum {
    if (this.property.isRent && this.property.isSale) {
      return this.allStates.FOR_SALE_RENT;
    }

    return this.property.isRent ? this.allStates.FOR_RENT : this.allStates.FOR_SALE;
  }
}
