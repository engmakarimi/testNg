import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsLayoutComponent } from './employee-details-layout.component';

describe('EmployeeDetailsLayoutComponent', () => {
  let component: EmployeeDetailsLayoutComponent;
  let fixture: ComponentFixture<EmployeeDetailsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeeDetailsLayoutComponent]
    });
    fixture = TestBed.createComponent(EmployeeDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
