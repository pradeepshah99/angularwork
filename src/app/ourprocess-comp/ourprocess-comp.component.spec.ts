import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprocessCompComponent } from './ourprocess-comp.component';

describe('OurprocessCompComponent', () => {
  let component: OurprocessCompComponent;
  let fixture: ComponentFixture<OurprocessCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurprocessCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurprocessCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
