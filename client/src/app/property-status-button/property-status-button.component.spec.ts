import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStatusButtonComponent } from './property-status-button.component';

describe('PropertyStatusButtonComponent', () => {
  let component: PropertyStatusButtonComponent;
  let fixture: ComponentFixture<PropertyStatusButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyStatusButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStatusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
