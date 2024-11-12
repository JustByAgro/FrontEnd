import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LandingPageComponent } from './paginas/landing-page/landing-page.component';
import { TelaVendedorComponent } from './paginas/tela-vendedor/tela-vendedor.component';
import { BackupComponentsComponent } from './components/backup-components/backup-components.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
    { path:'', component:LandingPageComponent },
    { path: 'home', component:HomeComponent },
    { path: 'vendedor', component:TelaVendedorComponent },
    /* rotas para teste */
    { path: 'backup', component:BackupComponentsComponent },
    { path: 'card', component: CardComponent }
];
