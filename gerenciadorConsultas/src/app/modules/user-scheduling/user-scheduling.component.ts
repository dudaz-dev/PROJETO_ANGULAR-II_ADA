import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ConsultasService } from '../aplicacao/services/consultas.service';


@Component({
  selector: 'app-user-scheduling',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './user-scheduling.component.html',
  styleUrl: './user-scheduling.component.css',
})
export class UserSchedulingComponent {
}
