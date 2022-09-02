import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcardsComponent } from './viewcards.component';

describe('ViewcardsComponent', () => {
  let component: ViewcardsComponent;
  let fixture: ComponentFixture<ViewcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
