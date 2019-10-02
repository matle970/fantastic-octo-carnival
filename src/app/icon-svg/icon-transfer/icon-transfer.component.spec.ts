import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTransferComponent } from './icon-transfer.component';

describe('IconTransferComponent', () => {
  let component: IconTransferComponent;
  let fixture: ComponentFixture<IconTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
