import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCarsFooterComponent } from './model-cars-footer.component';

describe('ModelCarsFooterComponent', () => {
  let component: ModelCarsFooterComponent;
  let fixture: ComponentFixture<ModelCarsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCarsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCarsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
