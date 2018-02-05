import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeCalculatorComponent } from './smoke-calculator.component';

describe('SmokeCalculatorComponent', () => {
  let component: SmokeCalculatorComponent;
  let fixture: ComponentFixture<SmokeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
