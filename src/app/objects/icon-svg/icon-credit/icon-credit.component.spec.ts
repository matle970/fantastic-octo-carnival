import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCreditComponent } from './icon-credit.component';

describe('IconCreditComponent', () => {
  let component: IconCreditComponent;
  let fixture: ComponentFixture<IconCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
