import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  constructor (private router:Router){}

  isVisiblePass: boolean = false;
  isVisibleConfPass: boolean = false;
  
  changeIcon(num:number){
    if (num === 0){
      this.isVisiblePass =  !this.isVisiblePass
    } else if (num === 1){
      this.isVisibleConfPass = !this.isVisibleConfPass
    }
  }

  redirectLogin(){
    this.router.navigate(['/login'])
  }
}
