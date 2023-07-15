import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { EmployeeForm } from '../../types';
import { EmployeeApiService, EmployeeLayoutService } from '../../services';
import { ViewModeEnum } from 'src/app/helpers';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-employee-create-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './employee-create-form.component.html',
  styleUrls: ['./employee-create-form.component.scss'],
})
export class EmployeeCreateFormComponent {
  form: FormGroup;
  employeeLayoutService = inject(EmployeeLayoutService);
  employeeApi = inject(EmployeeApiService);

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      surname: new FormControl<string>('', [Validators.required]),
      employeeNumber: new FormControl<string>('', [Validators.required]),
    });
  }

  save() {
    const value: EmployeeForm = this.form.value;
    if (value) {
      this.employeeApi.addEmployee(value).subscribe();
      this.employeeLayoutService.updateViewMode(ViewModeEnum.Default);
    }
  }
  cancel() {
    this.employeeLayoutService.updateViewMode(ViewModeEnum.Default);
  }
}
