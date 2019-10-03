import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNoticeComponent } from './company-notice.component';

describe('CompanyNoticeComponent', () => {
  let component: CompanyNoticeComponent;
  let fixture: ComponentFixture<CompanyNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
