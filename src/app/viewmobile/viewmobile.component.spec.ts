import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmobileComponent } from './viewmobile.component';

describe('ViewmobileComponent', () => {
  let component: ViewmobileComponent;
  let fixture: ComponentFixture<ViewmobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmobileComponent]
    });
    fixture = TestBed.createComponent(ViewmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
