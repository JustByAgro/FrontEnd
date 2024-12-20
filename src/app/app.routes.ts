import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LandingPageComponent } from './paginas/landing-page/landing-page.component';
import { TelaVendedorComponent } from './paginas/tela-vendedor/tela-vendedor.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './paginas/login/login.component';
import { InputIconComponent } from './components/input-icon/input-icon.component';
import { InputComponent } from './components/input/input.component';
import { BtnComponent } from './components/btn/btn.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VitrineComponent } from './paginas/vitrine/vitrine.component';

export const routes: Routes = [
    { path:'', component:LandingPageComponent },
    { path: 'home', component:HomeComponent },
    { path: 'vendedor', component:TelaVendedorComponent },
    { path: 'login', component:LoginComponent },
    { path: 'vitrine', component:VitrineComponent},
    /* rotas para teste */
    { path: 'card', component:CardComponent },
    { path: 'input', component:InputComponent },
    { path: 'input-icon', component:InputIconComponent },
    { path: 'btn', component:BtnComponent},
    { path: 'nav', component:NavbarComponent}
];
