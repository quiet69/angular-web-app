import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcardsComponent } from './addcards.component';

describe('AddcardsComponent', () => {
  let component: AddcardsComponent;
  let fixture: ComponentFixture<AddcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
