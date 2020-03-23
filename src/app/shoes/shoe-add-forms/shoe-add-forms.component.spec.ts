import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeAddFormsComponent } from './shoe-add-forms.component';

describe('ShoeAddFormsComponent', () => {
  let component: ShoeAddFormsComponent;
  let fixture: ComponentFixture<ShoeAddFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeAddFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeAddFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
