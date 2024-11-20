import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-icon-jb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-icon.component.html',
  styleUrl: './input-icon.component.scss'
})
export class InputIconComponent {
  @Input() placeHolder = '';
  @Input() texto = 'label';

  mostrar = false;

  classe = ''
  tipo = ''

  toggleImage():void { 
    this.mostrar = !this.mostrar;
    console.warn("Click funcionou => ")
  }
}

