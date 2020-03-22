import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemClockComponent } from './gem-clock.component';

describe('GemClockComponent', () => {
  let component: GemClockComponent;
  let fixture: ComponentFixture<GemClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
