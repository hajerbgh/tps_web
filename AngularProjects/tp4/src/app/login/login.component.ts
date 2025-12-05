import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  prenom: string = '';
  isLoggedIn: boolean = false;

  login() {
    this.isLoggedIn = this.prenom.trim().toLowerCase() === 'nada';
  }

  logout() {
    this.isLoggedIn = false;
    this.prenom = '';
  }
}
