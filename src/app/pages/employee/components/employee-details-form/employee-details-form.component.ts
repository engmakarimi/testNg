import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeApiService, EmployeeLayoutService } from '../../services';
import { ViewModeEnum } from 'src/app/helpers';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeDetailsLayoutComponent } from '../employee-details-layout/employee-details-layout.component';

@Component({
  selector: 'app-employee-details-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule, EmployeeDetailsLayoutComponent],
  templateUrl: './employee-details-form.component.html',
  styleUrls: ['./employee-details-form.component.scss'],
})
export class EmployeeDetailsFormComponent {
  employeeLayoutService = inject(EmployeeLayoutService);
  employee$ = inject(EmployeeApiService).getEmployee(
    this.employeeLayoutService.activeEmployeeId$
  );

  cancel() {
    this.employeeLayoutService.updateViewMode(ViewModeEnum.Default);
  }
}
