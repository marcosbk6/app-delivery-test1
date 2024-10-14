import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ajuste o caminho se necessário
import { MenuComponent } from './menu/menu.component';
import { GestaoComponent } from './gestao/gestao.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // rota padrão
    { path: 'menu', component: MenuComponent },
    { path: 'gestao', component: GestaoComponent }, 

];
