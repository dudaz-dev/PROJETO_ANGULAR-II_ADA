import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { MainComponent } from './components/main/main.component';


@Component({
  selector: 'app-adm-scheduling',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent, ],
  templateUrl: './adm-scheduling.component.html',
  styleUrl: './adm-scheduling.component.css',  // Corrigido de styleUrl para styleUrls
})
export class AdmSchedulingComponent {}
