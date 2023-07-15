import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeApiService, EmployeeLayoutService } from '../../services';
import { ViewModeEnum } from 'src/app/helpers';
import { Employee } from '../../types';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-edit-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  templateUrl: './employee-edit-form.component.html',
  styleUrls: ['./employee-edit-form.component.scss'],
})
export class EmployeeEditFormComponent {
  employeeLayoutService = inject(EmployeeLayoutService);
  employeeApiService = inject(EmployeeApiService);
  snackBar = inject(MatSnackBar);

  form: FormGroup;
  employee: Employee;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      surname: new FormControl<string>('', [Validators.required]),
      employeeNumber: new FormControl<string>('', [Validators.required]),
    });
    this.employeeApiService
      .getEmployee(this.employeeLayoutService.activeEmployeeId$)
      .subscribe((emp) => {
        this.form.patchValue(emp);
        this.employee = { ...emp };
      });
  }
  save() {
    const value = this.form.value;
    if (value) {
      this.employeeApiService
        .updateEmployee({ ...this.employee, ...value })
        .subscribe((p) => {
          if (p) {
            this.snackBar.open('successful actions');
            this.employeeLayoutService.updateViewMode(ViewModeEnum.Default);
          }
        });
    }
  }
  cancel() {
    this.employeeLayoutService.updateViewMode(ViewModeEnum.Default);
  }
}
