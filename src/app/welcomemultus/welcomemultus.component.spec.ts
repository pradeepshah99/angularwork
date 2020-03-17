import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomemultusComponent } from './welcomemultus.component';

describe('WelcomemultusComponent', () => {
  let component: WelcomemultusComponent;
  let fixture: ComponentFixture<WelcomemultusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomemultusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomemultusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
