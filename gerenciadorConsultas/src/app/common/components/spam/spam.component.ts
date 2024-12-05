import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpamService } from '../../services/spam.service';

@Component({
  selector: 'app-spam',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './spam.component.html',
  styleUrl: './spam.component.css',
})
export class SpamComponent {
  isVisible = this.spamService.isVisible$;

  constructor(protected spamService: SpamService) {}

  get message(): string {
    return this.spamService.message;
  }
}
