import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSectionAboutComponent } from './car-section-about.component';

describe('CarSectionAboutComponent', () => {
  let component: CarSectionAboutComponent;
  let fixture: ComponentFixture<CarSectionAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSectionAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSectionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
