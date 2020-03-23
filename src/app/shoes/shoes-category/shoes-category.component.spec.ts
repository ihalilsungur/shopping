import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesCategoryComponent } from './shoes-category.component';

describe('ShoesCategoryComponent', () => {
  let component: ShoesCategoryComponent;
  let fixture: ComponentFixture<ShoesCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
