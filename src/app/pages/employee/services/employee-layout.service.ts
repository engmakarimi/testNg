import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ViewModeEnum } from 'src/app/helpers';

@Injectable({
  providedIn: 'root',
})
export class EmployeeLayoutService {
  private viewModeSubject = new BehaviorSubject(ViewModeEnum.Default);
  viewMode$ = this.viewModeSubject.asObservable();
  updateViewMode(value: ViewModeEnum) {
    return this.viewModeSubject.next(value);
  }

  private activeEmployeeIdSubject = new BehaviorSubject('');
  activeEmployeeId$ = this.activeEmployeeIdSubject.asObservable();
  updateActiveEmployeeId(value: string) {
    return this.activeEmployeeIdSubject.next(value);
  }
}
