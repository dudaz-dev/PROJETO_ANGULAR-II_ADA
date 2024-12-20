import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  userRole = sessionStorage.getItem('USER_ROLE') || ''; 

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAgendamento(): void {
    if (this.userRole === 'USER') {
      this.router.navigate(['/user-scheduling']);
    } else {
      this.router.navigate(['/adm-scheduling']);
    }
  }
  
  onHistory(): void {
    if (this.userRole === 'USER') {
      this.router.navigate(['aplication/user/history']); 
    } else if (this.userRole === 'ADMIN') {
      this.router.navigate(['aplication/adm/history']); 
    } else {
      console.error('Papel de usuário inválido:', this.userRole);
    }
  } 
}

