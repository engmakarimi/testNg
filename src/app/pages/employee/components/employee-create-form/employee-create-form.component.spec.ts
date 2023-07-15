import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateFormComponent } from './employee-create-form.component';

describe('EmployeeCreateFormComponent', () => {
  let component: EmployeeCreateFormComponent;
  let fixture: ComponentFixture<EmployeeCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeeCreateFormComponent]
    });
    fixture = TestBed.createComponent(EmployeeCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
