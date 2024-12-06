import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SpamService } from '../../../../common/services/spam.service';
import { ConsultasService } from '../../../aplicacao/services/consultas.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  // appointments: any[] = [];

  // scheduleForm: FormGroup = new FormGroup({
  //   date: new FormControl('', [Validators.required]),
  //   time: new FormControl('', [Validators.required]),
  //   specialty: new FormControl('', [Validators.required]),
  //   doctor: new FormControl('', [Validators.required]),
  //   status: new FormControl('SCHEDULED'),
  //   obs: new FormControl(''),
  // });

  // constructor(
  //   private consultasService: ConsultasService,
  //   private spamService: SpamService
  // ) {}

  // ngOnInit(): void {
  //   console.log('OnInit')
  //   this.consultasService.getConsultas().subscribe({
  //     complete: () => {},
  //     error: (error) => {
  //       console.error('Erro ao criar agendamento:', error);
  //     },
  //   });
  // }

  // submitForm(): void {
  //   if (this.scheduleForm.valid) {
  //     const newAppointment = this.scheduleForm.getRawValue();
  //     this.consultasService.addConsulta(newAppointment).subscribe({
  //       next: (response) => {
  //         this.appointments.push(response);
  //         this.spamService.openSpam('Agendamento realizado com sucesso!');
  //         this.scheduleForm.reset();
  //       },
  //       error: (error) => {
  //         console.error('Erro ao criar agendamento:', error);
  //       },
  //     });
  //   }
  // }
}
