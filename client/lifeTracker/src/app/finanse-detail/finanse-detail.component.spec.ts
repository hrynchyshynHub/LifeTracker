import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanseDetailComponent } from './finanse-detail.component';

describe('FinanseDetailComponent', () => {
  let component: FinanseDetailComponent;
  let fixture: ComponentFixture<FinanseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
