import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosoulComponent } from './carosoul.component';

describe('CarosoulComponent', () => {
  let component: CarosoulComponent;
  let fixture: ComponentFixture<CarosoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarosoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
