import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './common/loading/loading.component';
import { AsyncPipe } from '@angular/common';
import { LoadingService } from './common/services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerenciadorConsultas';
  isLoading$ = this.loadingService.isLoading;

  constructor(private loadingService: LoadingService) {}
}
