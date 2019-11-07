import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSalaryComponent } from './icon-salary.component';

describe('IconSalaryComponent', () => {
  let component: IconSalaryComponent;
  let fixture: ComponentFixture<IconSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
