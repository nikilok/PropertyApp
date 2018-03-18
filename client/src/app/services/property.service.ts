import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PropertyRecord } from '../model/property-record';

@Injectable()
export class PropertyService {
  constructor() {}

  // Private Variables
  private propertyResults$ = new BehaviorSubject<PropertyRecord[]>([]);
  private isLoading$ = new BehaviorSubject(false);

  // Public Methods
  public getPropertydata(): Observable<PropertyRecord[]> {
    return this.propertyResults$.asObservable();
  }
  public updatePropertydata(records: PropertyRecord[]): void {
    this.propertyResults$.next(records);
  }
  public isLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
  public showLoading(): void {
    this.isLoading$.next(true);
  }
  public hideLoading(): void {
    this.isLoading$.next(false);
  }
}
