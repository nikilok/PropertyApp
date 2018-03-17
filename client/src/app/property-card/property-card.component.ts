import { Component, Input } from '@angular/core';
import { PropertyRecord } from '../model/property-record';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {

  @Input() property: PropertyRecord;

}
