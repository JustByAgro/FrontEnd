import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TelaVendedorComponent } from './components/tela-vendedor/tela-vendedor.component';
import { BackupComponentsComponent } from './components/backup-components/backup-components.component';

export const routes: Routes = [
    {'path':'', component:LandingPageComponent},
    {'path':'home',component:HomeComponent},
    {'path':'vendedor', component:TelaVendedorComponent},
    {'path':'backup',component:BackupComponentsComponent}
];
