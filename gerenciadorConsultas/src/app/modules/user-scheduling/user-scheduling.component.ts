import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { MainComponent } from './components/main/main.component';


@Component({
  selector: 'app-user-scheduling',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent, ],
  templateUrl: './user-scheduling.component.html',
  styleUrl: './user-scheduling.component.css',
})
export class UserSchedulingComponent {}
