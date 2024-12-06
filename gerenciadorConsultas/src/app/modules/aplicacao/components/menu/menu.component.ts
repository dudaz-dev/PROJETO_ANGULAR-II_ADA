import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthenticatedUser } from '../../../auth/models/authenticated-user.model';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  userRole = sessionStorage.getItem('USER_ROLE');

  constructor(
  ) {}

  ngOnInit(): void {
  }
}
