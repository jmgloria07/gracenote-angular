import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankGraceComponent } from './blank-grace.component';

describe('BlankGraceComponent', () => {
  let component: BlankGraceComponent;
  let fixture: ComponentFixture<BlankGraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankGraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankGraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
