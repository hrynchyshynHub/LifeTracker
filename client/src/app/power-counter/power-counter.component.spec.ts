import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerCounterComponent } from './power-counter.component';

describe('PowerCounterComponent', () => {
  let component: PowerCounterComponent;
  let fixture: ComponentFixture<PowerCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
