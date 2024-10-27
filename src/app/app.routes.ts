import { Routes } from '@angular/router';
import { HomeComponent } from './gestor/home/home.component'; // inicio
import { MenuComponent } from './menu/menu.component';
import { GestaoComponent } from './gestor/gestao/gestao.component';
import { AdicionarPratoComponent } from './gestor/adicionar-prato/adicionar-prato.component';
import { CardapioComponent } from './cliente/cardapio/cardapio.component';
import { PedidoComponent } from './cliente/pedido/pedido.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // rota padrão
    { path: 'menu', component: MenuComponent },
    { path: 'gestao', component: GestaoComponent }, 
    { path: 'cardapio', component: CardapioComponent},
    { path: 'adicionar-prato', component: AdicionarPratoComponent},   
    { path: 'pedido', component: PedidoComponent},
];
