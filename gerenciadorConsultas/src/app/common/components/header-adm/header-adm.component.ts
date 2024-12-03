import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonConfig, MatButtonModule } from '@angular/material/button'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-adm',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header-adm.component.html',
  styleUrl: './header-adm.component.css'
})
export class HeaderADMComponent {

}
