import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmobileComponent } from './addmobile.component';

describe('AddmobileComponent', () => {
  let component: AddmobileComponent;
  let fixture: ComponentFixture<AddmobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmobileComponent]
    });
    fixture = TestBed.createComponent(AddmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
