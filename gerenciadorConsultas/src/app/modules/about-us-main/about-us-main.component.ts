import { Component } from '@angular/core';
import { HeaderComponent } from './components/headerAbout/header.component'; 
import { FooterComponent } from './components/footerAbout/footer.component';
import { MainComponent } from './components/mainAbout/main.component';

@Component({
  selector: 'app-about-us-main',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './about-us-main.component.html',
  styleUrl: './about-us-main.component.css'
})
export class AboutUsMainComponent {

}
