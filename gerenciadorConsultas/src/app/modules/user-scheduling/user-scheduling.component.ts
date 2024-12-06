import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-scheduling',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './user-scheduling.component.html',
  styleUrls: ['./user-scheduling.component.css'], 
})
export class UserSchedulingComponent {
  form: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: ['', Validators.required], 
      time: ['', Validators.required], 
    });
  }
}
