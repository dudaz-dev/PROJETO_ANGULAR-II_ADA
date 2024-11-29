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
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    ReactiveFormsModule,
    NgxMaskDirective,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  protected form: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        this.validatePassword,
      ]),
      passwordConfirm: new FormControl(null, [Validators.required]),
      role: new FormControl({ disabled: true, value: 'USER' }),
    },
    {
      validators: matchPassword,
    }
  );

  protected roleValue = this.form.controls['role'].value;

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.form.controls['role'].valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.roleValue = value;
      });
  }

  protected changeRoleToAdmin() {
    const role = 'ADMIN';
    this.form.controls['role'].enable();
    this.form.controls['role'].setValue(role);
    this.form.controls['role'].disable();
  }

  protected changeRoleToUser() {
    const role = 'USER';
    this.form.controls['role'].enable();
    this.form.controls['role'].setValue(role);
    this.form.controls['role'].disable();
  }

  private validatePassword({
    value,
  }: FormControlState<string>): { [key: string]: boolean } | null {
    if (!value) return { requiredPassword: true };

    if (!value.trim()) return { emptyPassword: true };

    if (value.length < 5) return { minLengthPassword: true };

    return null;
  }
}

export const matchPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let password = control.get('password');
  let passwordConfirm = control.get('passwordConfirm');

  if (
    password &&
    passwordConfirm &&
    password?.value !== passwordConfirm?.value
  ) {
    return { passwordMatchError: true };
  }

  return null;
};
