import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SpamService } from '../../common/services/spam.service';
import { ConsultasService } from '../aplicacao/services/consultas.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-adm-scheduling',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './adm-scheduling.component.html',
  styleUrl: './adm-scheduling.component.css',
})
export class AdmSchedulingComponent {
  appointments = this.consultasService.listaConsultas$;

  scheduleForm: FormGroup = new FormGroup({
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    specialty: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required]),
    status: new FormControl('SCHEDULED'),
    obs: new FormControl(''),
  });

  constructor(
    private consultasService: ConsultasService,
    private spamService: SpamService
  ) {}

  ngOnInit(): void {
    this.consultasService.getConsultas();
  }

  statusDone() {
    this.scheduleForm.controls['status'].setValue('DONE');
    console.log(this.scheduleForm.controls['status']);
  }

  statusCanceled() {
    this.scheduleForm.controls['status'].setValue('CANCELED');
    console.log(this.scheduleForm.controls['status']);
  }

  submitForm(): void {
    if (!this.scheduleForm.valid) {
      return;
    }

    const newAppointment = this.scheduleForm.getRawValue();
    this.consultasService.saveConsulta(newAppointment).subscribe({
      next: () => {
        this.spamService.openSpam('Agendamento realizado com sucesso!');
        this.scheduleForm.reset();
      },
      error: (err) => {
        console.error('Erro ao criar agendamento:', err);
      },
    });
  }
}
