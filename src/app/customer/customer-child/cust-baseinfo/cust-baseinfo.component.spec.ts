import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustBaseInfoComponent } from './cust-baseinfo.component';

describe('CustBaseInfoComponent', () => {
  let component: CustBaseInfoComponent;
  let fixture: ComponentFixture<CustBaseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustBaseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustBaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
