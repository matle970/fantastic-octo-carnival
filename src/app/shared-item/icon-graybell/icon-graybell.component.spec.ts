import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGraybellComponent } from './icon-graybell.component';

describe('IconGraybellComponent', () => {
  let component: IconGraybellComponent;
  let fixture: ComponentFixture<IconGraybellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconGraybellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconGraybellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
