import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() texto:string = 'Título card';
  @Input() cidade:string = 'Cidade';
  @Input() preco:string = '00,00';
  @Input() texto_btn: string = 'Negociar / enviar';
}
