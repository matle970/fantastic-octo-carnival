import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBlacklistComponent } from './icon-blacklist.component';

describe('IconBlacklistComponent', () => {
  let component: IconBlacklistComponent;
  let fixture: ComponentFixture<IconBlacklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBlacklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
