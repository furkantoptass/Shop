import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductFormClassicComponent } from './add-product-form-classic.component';

describe('AddProductFormClassicComponent', () => {
  let component: AddProductFormClassicComponent;
  let fixture: ComponentFixture<AddProductFormClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductFormClassicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductFormClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
