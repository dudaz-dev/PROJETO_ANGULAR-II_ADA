import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Appointments } from '../aplicacao/Modal/appointments.model';

@Component({
  selector: 'app-user-scheduling',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './user-scheduling.component.html',
  styleUrl: './user-scheduling.component.css',
})
export class UserSchedulingComponent {
  form: FormGroup = new FormGroup({
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
  });
}
