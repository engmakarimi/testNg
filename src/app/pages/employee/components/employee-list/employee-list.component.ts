import { MatIconModule } from '@angular/material/icon';
import { inject } from '@angular/core';
import { Input, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { Employee } from '../../types';
import { DataSourceHelper, ViewModeEnum } from 'src/app/helpers';
import { EmployeeApiService, EmployeeLayoutService } from '../../services';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent extends DataSourceHelper<Employee> {
  employeeLayoutService = inject(EmployeeLayoutService);
  employeeApiService = inject(EmployeeApiService);

  @Input('dataSource')
  set initializeData(data: Employee[] | null) {
    this.dataSource.data = data?.length ? data : this.noData;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  viewModeEnum = ViewModeEnum;
  ngOnInit() {
    // 'row',
    this.displayedColumns = [
      'employeeNumber',
      'name',
      'surname',
      'enterDate',
      'exitDate',
      'description',
      'action',
    ];
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addData() {
    this.employeeLayoutService.updateViewMode(this.viewModeEnum.Create);
  }
  employeeDetails(id: string) {
    this.employeeLayoutService.updateViewMode(this.viewModeEnum.Details);
    this.employeeLayoutService.updateActiveEmployeeId(id);
  }
  employeeEdit(id: string) {
    this.employeeLayoutService.updateViewMode(this.viewModeEnum.Edit);
    this.employeeLayoutService.updateActiveEmployeeId(id);
  }

  employeeDelete(id: string) {
    this.employeeApiService.deleteEmployee(id).subscribe((p) => {
      this.employeeLayoutService.updateViewMode(this.viewModeEnum.Default);
    });
  }
}
