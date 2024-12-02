import { Component } from '@angular/core';
import { HeaderComponent } from '../../modules/about-us-main/components/headerAbout/header.component'; 
import { FooterComponent } from '../components/footer/footer.component'; 

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
