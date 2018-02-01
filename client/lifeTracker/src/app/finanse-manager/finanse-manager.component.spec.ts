import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanseManagerComponent } from './finanse-manager.component';

describe('FinanseManagerComponent', () => {
  let component: FinanseManagerComponent;
  let fixture: ComponentFixture<FinanseManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanseManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
