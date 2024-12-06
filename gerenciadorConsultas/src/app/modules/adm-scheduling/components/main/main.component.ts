import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ConsultasService } from '../../../aplicacao/services/consultas.service';
import { SpamService } from '../../../../common/services/spam.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  appointments: any[] = [];
  scheduleForm: FormGroup = new FormGroup({
    date: new FormControl( '', [Validators.required]),
    time: new FormControl( '', [Validators.required]),
    specialty: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required]),
    status: new FormControl("SCHEDULED"),
    obs: new FormControl(''),
  });
  
    constructor(private consultasService: ConsultasService , private spamService: SpamService) {    }

  

    submitForm(): void {
      console.log("entrou no submitForm")
      if (this.scheduleForm.valid) {
        console.log("entrou no IF")
        const newAppointment = this.scheduleForm.getRawValue();
        this.consultasService.addConsulta(newAppointment).subscribe({
          next: (response) => {
            this.appointments.push(response); // Adiciona o novo agendamento à lista
            this.spamService.openSpam('Agendamento realizado com sucesso!');
            this.scheduleForm.reset(); // Limpa o formulário
            console.log("entrou no next");
            
          },
          error: (error) => {
            console.error('Erro ao criar agendamento:', error);
          }
      });
      
          
      }
    }
}
