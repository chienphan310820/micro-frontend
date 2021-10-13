import { ComponentFixture, TestBed } from '@angular/core/testing';

import { msb_stComponent } from './msb-st.component';

describe('CalendarComponent', () => {
  let component: msb_stComponent;
  let fixture: ComponentFixture<msb_stComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ msb_stComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(msb_stComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
