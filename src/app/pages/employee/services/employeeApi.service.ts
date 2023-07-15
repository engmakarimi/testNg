import { Injectable } from '@angular/core';
import { BehaviorSubject, of, map, Observable, switchMap } from 'rxjs';
import { Moke_Employees } from 'src/app/mock/employees';
import { Employee, EmployeeForm } from '../types';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  private employeesSubject = new BehaviorSubject([...Moke_Employees]);
  private employees$ = this.employeesSubject.asObservable();

  addEmployee(value: EmployeeForm) {
    const newEmployee = new Employee(value);
    let list: Employee[] = [];
    this.employees$.subscribe((p) => {
      list = [{ ...newEmployee }, ...p];
    });
    this.employeesSubject.next(list);
    return of(true);
  }

  deleteEmployee(id: string) {
    // debugger
    let list: Employee[] = [];
    this.employees$.subscribe((p) => {
      list = [...p];
    });
    const index = list.findIndex((p) => p.id === id);
    if (index > -1) {
      list.splice(index, 1);
      this.employeesSubject.next(list);
    }
    return of(true);
  }

  updateEmployee(value: Employee) {
    let list: Employee[] = [];
    this.employees$.subscribe((p) => {
      list = [...p];
    });
    const index = list.findIndex((p) => p.id === value.id);
    if (index > -1) {
      list.splice(index, 1, value);
      this.employeesSubject.next(list);
    }
    return of(true);
  }

  getEmployees() {
    return this.employees$;
  }

  getEmployee(id$: Observable<string>): Observable<Employee> {
    return id$.pipe(
      switchMap((id) =>
        this.employees$.pipe(map((p) => p.filter((emp) => emp.id === id)[0]))
      )
    );
  }
}
