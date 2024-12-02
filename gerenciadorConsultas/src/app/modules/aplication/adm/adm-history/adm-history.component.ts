import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../common/components/header/header.component';
import { FooterComponent } from '../../../../common/components/footer/footer.component';

@Component({
  selector: 'app-adm-history',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './adm-history.component.html',
  styleUrl: './adm-history.component.css'
})
export class AdmHistoryComponent {

}
