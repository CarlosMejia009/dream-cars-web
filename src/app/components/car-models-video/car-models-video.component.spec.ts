import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModelsVideoComponent } from './car-models-video.component';

describe('CarModelsVideoComponent', () => {
  let component: CarModelsVideoComponent;
  let fixture: ComponentFixture<CarModelsVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarModelsVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarModelsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
