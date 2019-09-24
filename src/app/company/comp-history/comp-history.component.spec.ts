import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHistoryComponent } from './comp-history.component';

describe('CompHistoryComponent', () => {
  let component: CompHistoryComponent;
  let fixture: ComponentFixture<CompHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
