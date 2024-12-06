import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ConsultasService } from '../../../aplicacao/services/consultas.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  form: FormGroup = new FormGroup({
    date: new FormControl({ value: null, disabled: true }),
    time: new FormControl({ value: null, disabled: true }),
  });

  constructor(private consultasService: ConsultasService) {}

  editConsulta() {}

  timeValue() {
    
  }
}
