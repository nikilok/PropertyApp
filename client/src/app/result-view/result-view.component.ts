import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PropertyRecord } from '../model/property-record';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {
  @Input() properties$: Observable<PropertyRecord[]>;

  properties: PropertyRecord[];
  private readonly numberOfProperties: number = 50;

  constructor() {}

  ngOnInit() {
    this.properties$.subscribe(properties => {
      this.properties = properties.slice(0, this.numberOfProperties);
    });
  }
}
