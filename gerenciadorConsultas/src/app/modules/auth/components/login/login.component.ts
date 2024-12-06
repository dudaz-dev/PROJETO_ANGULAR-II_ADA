import { CommonModule } from '@angular/common';
import { Component, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  currentRole: string = 'USER';

  onRoleChange(newRole: string) {
    this.currentRole = newRole;
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private destroyRef: DestroyRef
  ) {}

  onSubmit() {
    if (!this.loginForm.valid) {
      console.log('Formulário inválido');
      return;
    }

    this.authService
      .login(this.loginForm.getRawValue())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          sessionStorage.setItem('USER_TOKEN', res.token);
          sessionStorage.setItem('USER_ROLE', res.user.role);

          if (res.user.role === 'USER') this.router.navigate(['/aplication']);
          if (res.user.role === 'ADMIN')
            this.router.navigate(['/aplication/adm']);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get senha() {
    return this.loginForm.get('senha');
  }
}
