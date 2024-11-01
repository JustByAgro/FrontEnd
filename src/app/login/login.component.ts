import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor (private router: Router) {}


  // Funções de animação
  isVisible: boolean = false;
  changeIcon(){
    this.isVisible = !this.isVisible
  }


  redirectCadastrar(){
    this.router.navigate(['/cadastro'])
  }
}
