import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { MainComponent } from './components/main/main.component';
import { ConsultasService } from '../aplicacao/services/consultas.service';


@Component({
  selector: 'app-adm-scheduling',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent, ],
  templateUrl: './adm-scheduling.component.html',
  styleUrl: './adm-scheduling.component.css',  // Corrigido de styleUrl para styleUrls
})
export class AdmSchedulingComponent {

  constructor(private consultasService: ConsultasService) {}
}
