import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // inicio
import { MenuComponent } from './menu/menu.component';
import { GestaoComponent } from './gestao/gestao.component';
import { AdicionarPratoComponent } from './adicionar-prato/adicionar-prato.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // rota padrão
    { path: 'menu', component: MenuComponent },
    { path: 'gestao', component: GestaoComponent }, 
    { path: 'adicionar-prato', component: AdicionarPratoComponent}
];
