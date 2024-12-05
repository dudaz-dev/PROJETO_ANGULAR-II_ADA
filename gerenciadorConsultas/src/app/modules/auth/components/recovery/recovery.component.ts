import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from '../../../../common/components/header/header.component';
import { FooterComponent } from '../../../../common/components/footer/footer.component';
import { Router } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    MatProgressBarModule,
  ],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.css',
})
export class RecoveryComponent {
  form: FormGroup;
  showCancelConfirmation = false; 
  showConfirmationMessage = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  openCancelConfirmation(): void {
    this.showCancelConfirmation = true;
  }

  closeCancelConfirmation(): void {
    this.showCancelConfirmation = false;
  }

  confirmNavigation(): void {
    this.router.navigate(['/about-us-main']);    
  }

  onConfirm(): void {
    this.showConfirmationMessage = true;

    setTimeout(() => {
      this.showConfirmationMessage = false;
      this.router.navigate(['/']); 
    }, 3000);
  }
}
