import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustChartsComponent } from './cust-charts.component';

describe('CustChartsComponent', () => {
  let component: CustChartsComponent;
  let fixture: ComponentFixture<CustChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
