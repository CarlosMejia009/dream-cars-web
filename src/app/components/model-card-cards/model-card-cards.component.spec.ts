import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCardCardsComponent } from './model-card-cards.component';

describe('ModelCardCardsComponent', () => {
  let component: ModelCardCardsComponent;
  let fixture: ComponentFixture<ModelCardCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCardCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCardCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
