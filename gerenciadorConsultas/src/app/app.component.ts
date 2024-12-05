import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpamComponent } from './common/components/spam/spam.component';
import { LoadingComponent } from './common/loading/loading.component';
import { LoadingService } from './common/services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, AsyncPipe, SpamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerenciadorConsultas';
  isLoading$ = this.loadingService.isLoading;

  constructor(private loadingService: LoadingService) {}
}
