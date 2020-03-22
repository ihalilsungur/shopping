import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingCategoryComponent } from './clothing-category.component';

describe('ClothingCategoryComponent', () => {
  let component: ClothingCategoryComponent;
  let fixture: ComponentFixture<ClothingCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
