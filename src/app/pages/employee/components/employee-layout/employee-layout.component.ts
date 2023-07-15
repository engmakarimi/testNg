import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeCreateFormComponent } from '../employee-create-form/employee-create-form.component';
import { EmployeeApiService, EmployeeLayoutService } from '../../services';
import { ViewModeEnum } from 'src/app/helpers';
import { EmployeeDetailsFormComponent } from '../employee-details-form/employee-details-form.component';
import { EmployeeEditFormComponent } from '../employee-edit-form/employee-edit-form.component';

import { MatCardModule } from '@angular/material/card';
import { AuthService } from 'src/app/pages/login';
import { EmployeeDetailsLayoutComponent } from '../employee-details-layout/employee-details-layout.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    EmployeeListComponent,
    EmployeeCreateFormComponent,
    EmployeeDetailsFormComponent,
    EmployeeEditFormComponent,
    EmployeeDetailsLayoutComponent,
    MatCardModule,
  ],
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.scss'],
})
export class EmployeeLayoutComponent {
  employees$ = inject(EmployeeApiService).getEmployees();
  viewMode$ = inject(EmployeeLayoutService).viewMode$;
  userInfo = inject(AuthService).UserInfo;
  viewModeEnum = ViewModeEnum;
}
