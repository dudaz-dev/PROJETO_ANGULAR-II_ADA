import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, FormsModule } from '@angular/forms';
import { SpamService } from '../../common/services/spam.service';
import { ConsultasService } from '../aplicacao/services/consultas.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Appointments } from '../aplicacao/model/appointments.model';
import { Observable } from 'rxjs';
import { PatientServiceService } from '../auth/services/patient-service.service';
import { Patient } from '../auth/models/patient.model';

@Component({
  selector: 'app-adm-scheduling',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './adm-scheduling.component.html',
  styleUrls: ['./adm-scheduling.component.css'],
})
export class AdmSchedulingComponent implements OnInit {
  appointments: Observable<Appointments[]> = this.consultasService.listaConsultas$;
  existingDates: string[] = []; // Datas existentes para validação
  patients: Patient[] = []; // Lista completa de pacientes
  filteredPatients: Patient[] = []; // Lista filtrada para busca
  searchTerm: string = ''; // Termo de busca

  scheduleForm: FormGroup = new FormGroup({
    date: new FormControl('', [
      Validators.required,
      this.validateDate.bind(this),
    ]),
    time: new FormControl('', [Validators.required]),
    specialty: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required]),
    status: new FormControl('SCHEDULED'),
    patient: new FormControl('', [Validators.required]),
    obs: new FormControl(''),
  });
availableTimes: any;
patient: any;

  constructor(
    private consultasService: ConsultasService,
    private spamService: SpamService,
    private patientService: PatientServiceService 
  ) {}

  ngOnInit(): void {
    console.log('Inicializando adm-scheduling...');

    // Carrega consultas existentes
    this.consultasService.getConsultas().subscribe({
      next: (appointments: Appointments[]) => {
        console.log('Consultas recebidas:', appointments);
        this.existingDates = appointments.map(a => `${a.date}-${a.time}`);
      },
      error: (err: any) => {
        console.error('Erro ao carregar consultas:', err);
      },
    });

    // Carrega lista de pacientes
    this.loadPatients();
  }

  // Método para carregar os pacientes
  loadPatients(): void {
    this.patientService.getUsers().subscribe({
      next: (response: Patient[]) => {
        this.patients = response; 
        this.filteredPatients = this.patients; 
      },
      error: (err: any) => {
        console.error('Erro ao carregar pacientes:', err);
      },
    });
  }

  filterPatients(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredPatients = this.patients.filter(patient =>
      patient.name.toLowerCase().includes(term)
    );
  }

  // Validação personalizada para data
  validateDate(control: AbstractControl): ValidationErrors | null {
    const inputDate = new Date(control.value);
    const today = new Date();
    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(today.getMonth() + 1);

    if (!control.value || !this.scheduleForm.get('time')?.value) {
      return null; // Ignora a validação até que ambos estejam preenchidos
    }

    if (inputDate < today) {
      return { pastDate: true }; // Data passada
    }

    const inputDateTime = `${control.value}-${this.scheduleForm.get('time')?.value}`;
    if (this.existingDates.includes(inputDateTime)) {
      return { alreadyExists: true }; // Data e horário já registrados
    }

    return null;
  }

  submitForm(): void {
    this.scheduleForm.markAllAsTouched();
  
    if (this.scheduleForm.invalid) {
      console.error('Formulário inválido');
      return;
    }
  
    // Obter o nome do paciente selecionado
    const selectedPatientId = this.scheduleForm.get('patient')?.value;
    const selectedPatient = this.patients.find(patient => patient.id === selectedPatientId);
  
    if (!selectedPatient) {
      console.error('Paciente não encontrado.');
      return;
    }
  
    const patientName = selectedPatient.name;
    const obs = `Paciente ${patientName}, está com ${this.scheduleForm.get('obs')?.value}`;
    this.scheduleForm.patchValue({ obs });
  
    const newAppointment = this.scheduleForm.getRawValue();
  
    // Salvar o agendamento
    this.consultasService.saveConsulta(newAppointment).subscribe({
      next: () => {
        this.spamService.openSpam('Agendamento realizado com sucesso!');
        this.scheduleForm.reset();
        location.reload(); // Recarrega a página após o agendamento
      },
      error: (err) => {
        console.error('Erro ao criar agendamento:', err);
      },
    });
  }
  
  markAsDone(id: string): void {
    this.consultasService.markAsDone(id).subscribe({
      next: () => {
        console.log(`Consulta ${id} marcada como concluída.`);
        this.reloadAppointments(); // Atualiza a lista de agendamentos
      },
      error: (err) => {
        console.error('Erro ao marcar consulta como concluída:', err);
        this.spamService.openSpam('Erro ao marcar consulta como concluída.');
      },
    });
  }

  deleteAppointment(appointment: Appointments): void {
    this.consultasService.cancelAppointment(appointment.id).subscribe({
      next: () => {
        console.log('Consulta cancelada com sucesso');
        this.reloadAppointments(); // Atualiza a lista de consultas
      },
      error: (err) => {
        console.error('Erro ao cancelar consulta:', err);
      },
    });
  }

  reloadAppointments(): void {
    this.consultasService.getConsultas().subscribe({
      next: (appointments: Appointments[]) => {
        console.log('Consultas recarregadas:', appointments);
      },
      error: (err) => {
        console.error('Erro ao recarregar consultas:', err);
      },
    });
  }
}
