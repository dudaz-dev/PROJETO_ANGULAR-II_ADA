export interface Appointments {
    id: string;             // ID único da consulta (UUID)
    specialty: string;      // Especialidade médica (ex.: 'Cardiologista')
    doctor: string;         // Nome do médico
    date: string;           // Data da consulta (formato ISO ou 'YYYY-MM-DD')
    time: string;           // Horário da consulta
    obs: string;            // Observações sobre a consulta
    status: string;         // Status da consulta (ex.: 'SCHEDULED')
  }
  