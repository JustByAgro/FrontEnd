import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-jb',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() texto = 'label';
}
