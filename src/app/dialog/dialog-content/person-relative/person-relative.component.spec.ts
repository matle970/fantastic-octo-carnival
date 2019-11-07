import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRelativeComponent } from './person-relative.component';

describe('PersonRelativeComponent', () => {
  let component: PersonRelativeComponent;
  let fixture: ComponentFixture<PersonRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
