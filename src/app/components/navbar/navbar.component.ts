import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent { 
  // Faz a verificação de login
  isLogado: boolean = false;
}
