import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { InputIconComponent } from '../../components/input-icon/input-icon.component';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, InputIconComponent, BtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
