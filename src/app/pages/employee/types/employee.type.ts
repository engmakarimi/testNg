
import { EmployeeForm } from './employee-form.type';

export class Employee {
  id: string;
  employeeNumber: string;
  name: string;
  surname: string;
  dateOfBirth: Date = new Date();
  enterDate: Date = new Date();
  exitDate: Date = new Date();
  access: string = 'Normal';
  office: string = '5th';
  description: string = '';
  constructor(emp: EmployeeForm) {
    this.name = emp.name;
    this.surname = emp.surname;
    this.employeeNumber = emp.employeeNumber;
    this.id = generateID();
  }
}

function generateID(): string {
  const min = 100000; // Minimum value for 6 digits
  const max = 999999; // Maximum value for 6 digits
  const id = Math.floor(Math.random() * (max - min + 1)) + min;
  return id.toString();
}
