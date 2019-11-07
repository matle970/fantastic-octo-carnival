import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterPrintComponent } from './water-print.component';

describe('WaterPrintComponent', () => {
  let component: WaterPrintComponent;
  let fixture: ComponentFixture<WaterPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
