import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../types';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-employee-details-layout',
  standalone: true,
  imports: [CommonModule, DescriptionComponent],
  templateUrl: './employee-details-layout.component.html',
  styleUrls: ['./employee-details-layout.component.scss'],
})
export class EmployeeDetailsLayoutComponent {
  @Input() employee: Employee;
}
