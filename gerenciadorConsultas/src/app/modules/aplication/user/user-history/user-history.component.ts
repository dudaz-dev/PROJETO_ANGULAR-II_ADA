import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../common/components/header/header.component';
import { FooterComponent } from '../../../../common/components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonConfig, MatButtonModule } from '@angular/material/button'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-history',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatIconModule, MatButtonModule,HeaderComponent,FooterComponent, MatButton,],
  templateUrl: './user-history.component.html',
  styleUrl: './user-history.component.css'
})
export class UserHistoryComponent {

}
