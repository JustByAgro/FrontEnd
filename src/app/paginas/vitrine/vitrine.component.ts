import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardComponent } from '../../components/card/card.component';
import { range } from 'rxjs';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [NavbarComponent, CardComponent],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.scss'
})
export class VitrineComponent {
  numeros = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}
