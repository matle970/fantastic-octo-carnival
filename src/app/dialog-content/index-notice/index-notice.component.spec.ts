import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNoticeComponent } from './index-notice.component';

describe('IndexNoticeComponent', () => {
  let component: IndexNoticeComponent;
  let fixture: ComponentFixture<IndexNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
