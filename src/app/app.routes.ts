import { Routes } from '@angular/router';
import { HomeComponent } from './gestor/home/home.component'; // inicio
import { MenuComponent } from './menu/menu.component';
import { GestaoComponent } from './gestor/gestao/gestao.component';
import { AdicionarPratoComponent } from './gestor/adicionar-prato/adicionar-prato.component';
import { CardapioComponent } from './cliente/cardapio/cardapio.component';
import { PedidoComponent } from './cliente/pedido/pedido.component';
import { TelaInicioComponent } from './cliente/tela-inicio/tela-inicio.component';
import { AcompanharPedidoComponent } from './cliente/acompanhar-pedido/acompanhar-pedido.component';
import { FinalizacaoComponent } from './cliente/finalizacao/finalizacao.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tela-inicio', component: TelaInicioComponent },
    { path: 'gestao', component: GestaoComponent },
    { path: 'cardapio', component: CardapioComponent},
    { path: 'adicionar-prato', component: AdicionarPratoComponent},
    { path: 'pedido', component: PedidoComponent},
    { path: 'acompanhar-pedido', component: AcompanharPedidoComponent },
    { path: 'finalizacao', component: FinalizacaoComponent},
];
