import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormControl,
  FormControlState,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  currentRole: string = 'USER';

  onRoleChange(newRole: string) {
    this.currentRole = newRole;
  }

  loginForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      // Faça algo com os dados do formulário
      console.log(this.loginForm.value);
      // Redirecionar ou tratar o login
    } else {
      console.log('Formulário inválido');
    }
  }

  get login() {
    return this.loginForm.get('login');
  }

  get senha() {
    return this.loginForm.get('senha');
  }

}
