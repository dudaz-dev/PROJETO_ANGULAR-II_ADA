import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpamService } from '../../common/services/spam.service';
import { ConsultasService } from '../aplicacao/services/consultas.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-adm-scheduling',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './adm-scheduling.component.html',
  styleUrl: './adm-scheduling.component.css', // Corrigido de styleUrl para styleUrls
})
export class AdmSchedulingComponent {
  // appointments: any[] = [];
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

  submitForm(): void {
    if (!this.scheduleForm.valid) {
      return;
    }

    // const newAppointment = this.scheduleForm.getRawValue();
    // this.consultasService.addConsulta(newAppointment).subscribe({
    //   next: (response) => {
    //     this.appointments.push(response);
    //     this.spamService.openSpam('Agendamento realizado com sucesso!');
    //     this.consultasService.getConsultas();
    //     this.scheduleForm.reset();
    //   },
    //   error: (error) => {
    //     console.error('Erro ao criar agendamento:', error);
    //   },
    // });
  }
}
