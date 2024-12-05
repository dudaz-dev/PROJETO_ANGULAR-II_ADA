import { Component } from '@angular/core';
import { HeaderComponentPrivate } from '../../../../common/components/header/header.component';
import { FooterComponent } from '../../../../common/components/footer/footer.component';

@Component({
  selector: 'app-medical-registration',
  standalone: true,
  imports: [HeaderComponentPrivate,FooterComponent],
  templateUrl: './medical-registration.component.html',
  styleUrl: './medical-registration.component.css'
})
export class MedicalRegistrationComponent {

}
