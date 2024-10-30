import { Routes } from '@angular/router';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ProdutoComponent } from './produto/produto.component';
import { VitrineComponent } from './vitrine/vitrine.component';

export const routes: Routes = [
    {path:'', component: LadingPageComponent},
    {path:'login', component: LoginComponent},
    {path:'cadastro', component: CadastroComponent},
    {path:'home', component: HomeComponent},
    {path:'perfil', component: PerfilComponent},
    {path:'cadastroProdutos', component: CadastroProdutoComponent},
    {path:'produtos', component: ProdutoComponent},
    {path:'vitrine', component: VitrineComponent}
];
