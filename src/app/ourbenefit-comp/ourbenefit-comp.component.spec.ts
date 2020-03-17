import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbenefitCompComponent } from './ourbenefit-comp.component';

describe('OurbenefitCompComponent', () => {
  let component: OurbenefitCompComponent;
  let fixture: ComponentFixture<OurbenefitCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurbenefitCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurbenefitCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
