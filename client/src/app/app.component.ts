import { Component, OnInit } from '@angular/core';
import { PropertyServiceXHR } from './rest/fetch-property.service';
import { PropertyService } from './services/property.service';
import { PropertyRecord } from './model/property-record';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  properties$: Observable<PropertyRecord[]>;
  isLoading$: Observable<Boolean>;

  constructor(private propertyServiceXHR: PropertyServiceXHR, private propertyService: PropertyService) {}

  ngOnInit() {
    this.isLoading$ = this.propertyService.isLoading();
    this.propertyService.showLoading();
    this.fetchPropertyData();
    this.properties$ = this.propertyService.getPropertydata();
  }

  fetchPropertyData() {
    this.propertyServiceXHR.fetchData().subscribe((res: any) => {
      const properties = res.data.map(property => new PropertyRecord(property));
      this.propertyService.updatePropertydata(properties);
      this.propertyService.hideLoading();
    });
  }
}
