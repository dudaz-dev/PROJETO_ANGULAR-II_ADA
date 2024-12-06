import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-user-scheduling',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './user-scheduling.component.html',
  styleUrl: './user-scheduling.component.css',
})
export class UserSchedulingComponent {
  
}
