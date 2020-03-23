import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingAddFormsComponent } from './clothing-add-forms.component';

describe('ClothingAddFormsComponent', () => {
  let component: ClothingAddFormsComponent;
  let fixture: ComponentFixture<ClothingAddFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingAddFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingAddFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
