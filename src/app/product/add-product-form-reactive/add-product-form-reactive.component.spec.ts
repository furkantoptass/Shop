import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductFormReactiveComponent } from './add-product-form-reactive.component';

describe('AddProductFormReactiveComponent', () => {
  let component: AddProductFormReactiveComponent;
  let fixture: ComponentFixture<AddProductFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductFormReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
