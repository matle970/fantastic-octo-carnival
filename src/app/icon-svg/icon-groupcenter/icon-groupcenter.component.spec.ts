import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGroupcenterComponent } from './icon-groupcenter.component';

describe('IconGroupcenterComponent', () => {
  let component: IconGroupcenterComponent;
  let fixture: ComponentFixture<IconGroupcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconGroupcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconGroupcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
