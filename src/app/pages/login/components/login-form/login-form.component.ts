import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

//material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar,MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  form: FormGroup;
  hide = true;
  authService = inject(AuthService);
  router = inject(Router);
  snackBar=inject(MatSnackBar) 
  ngOnInit() {
    this.form = new FormGroup({
      userName: new FormControl<string>('segal', [Validators.required]),
      password: new FormControl<string>('123456', [Validators.required]),
    });
  }

  submit() {
    const value = this.form.value;
    if (value) {
      this.authService
        .login(value['userName'], value['password'])
        .subscribe((p) => {
          if (p) {
            this.router.navigate(['']);
          }
          this.snackBar.open('wrong information')
        });
    }
    
  }
}
