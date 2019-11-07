import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNetbankComponent } from './icon-netbank.component';

describe('IconNetbankComponent', () => {
  let component: IconNetbankComponent;
  let fixture: ComponentFixture<IconNetbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconNetbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconNetbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
