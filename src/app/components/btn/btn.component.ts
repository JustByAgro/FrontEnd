import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Input() tipo = 'primary';
  @Input() texto = 'texto';

  classe = ''

  ngOnInit(): void {
    if (this.tipo === 'primary') {
      this.classe = 'button-primary';
    }

    else if (this.tipo === 'primary-outline') {
      this.classe = 'button-primary-outline'
    }

    else if (this.tipo === 'danger') {
      this.classe = 'button-danger'
    }

    else if (this.tipo === 'danger-outline') {
      this.classe = 'button-danger-outline'
    }
  }

}
