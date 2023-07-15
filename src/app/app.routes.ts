import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './pages/login';
import { authGuard } from './guards';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginLayoutComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: '/employee' },
  {
    path: '',
    component:MainLayoutComponent,
    canActivateChild:[authGuard],
    children: [
      {
        path: 'employee',
        loadComponent: () =>
          import(
            './pages/employee/components/employee-layout/employee-layout.component'
          ).then((m) => m.EmployeeLayoutComponent),
      },
    
    ],
  },
 
];
