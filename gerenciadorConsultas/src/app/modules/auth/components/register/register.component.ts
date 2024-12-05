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
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { FooterComponent } from '../../../../common/components/footer/footer.component';
import { SpamService } from '../../../../common/services/spam.service';
import { AuthService } from '../../services/auth.service';
import { ViaCepService } from '../../services/via-cep.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  protected form: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      documentNumber: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      zipCode: new FormControl(null, [Validators.required]),
      street: new FormControl({ value: null, disabled: true }),
      number: new FormControl(null, [Validators.required]),
      neighborhood: new FormControl({ value: null, disabled: true }),
      state: new FormControl({ value: null, disabled: true }),
      city: new FormControl({ value: null, disabled: true }),
      password: new FormControl(null, [this.validatePassword]),
      passwordConfirm: new FormControl(null, [Validators.required]),
      role: new FormControl({
        disabled: true,
        value: 'USER',
      }),
    },
    {
      validators: matchPasswordValidator,
    }
  );

  protected roleValue = this.form.controls['role'].value;
  protected errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private viaCepService: ViaCepService,
    private router: Router,
    private destroyRef: DestroyRef,
    private spamService: SpamService
  ) {}

  ngOnInit(): void {
    this.form.controls['role'].valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.roleValue = value;
      });
  }

  onSubmit(): void {
    this.form.controls['role'].enable();
    const payload = this.form.getRawValue();
    this.authService
      .register(payload)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        complete: () => {
          this.spamService.openSpam('Cadastro realizado com sucesso!');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
        },
      });
    this.form.controls['role'].disable();
  }

  onRoleChange(role: string): void {
    this.form.controls['role'].enable();
    this.form.controls['role'].setValue(role);
    this.form.controls['role'].disable();
  }

  protected fetchAddress(): void {
    const zipCodeValue = this.form.controls['zipCode'].getRawValue();

    if (!this.viaCepService.isValidZipCode(zipCodeValue)) {
      this.errorMessage = 'CEP inválido.';
      return;
    }

    this.viaCepService
      .getAddressByZipCode(zipCodeValue)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.handleAddressResponse(data);
        },
        error: (err) => {
          console.error('Erro ao buscar o CEP:', err);
          this.errorMessage = 'Erro ao consultar o CEP.';
        },
      });
  }

  private handleAddressResponse(data: any) {
    if (data.erro) {
      this.errorMessage = 'CEP não encontrado.';
    } else {
      this.form.patchValue({
        street: data.logradouro,
        neighborhood: data.bairro,
        state: data.uf,
        city: data.localidade,
      });
    }
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

export const matchPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirm = control.get('passwordConfirm');

  if (
    password &&
    passwordConfirm &&
    password?.value !== passwordConfirm?.value
  ) {
    return { passwordMatchError: true };
  }

  return null;
};
