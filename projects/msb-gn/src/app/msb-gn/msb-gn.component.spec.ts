import { ComponentFixture, TestBed } from '@angular/core/testing';

import { msb_gnComponent } from './msb-gn.component';

describe('CalendarComponent', () => {
  let component: msb_gnComponent;
  let fixture: ComponentFixture<msb_gnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ msb_gnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(msb_gnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
