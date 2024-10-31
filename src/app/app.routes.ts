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
import { InicioComponent } from './cozinha/inicio-c/inicio-c.component';
import { PrepararComponent } from './cozinha/preparar/preparar.component';
import { PreparandoComponent } from './cozinha/preparando/preparando.component';
import { FinalizadosComponent } from './cozinha/finalizados/finalizados.component';
import { NotificandoMotoComponent } from './cozinha/notificando-moto/notificando-moto.component';
import { TelaInicialComponent } from './motoboy/tela-inicial/tela-inicial.component';
import { AceitarEntregaComponent } from './motoboy/aceitar-entrega/aceitar-entrega.component';
import { DadosRestauranteComponent } from './motoboy/dados-restaurante/dados-restaurante.component';
import { PedidoEntregueComponent } from './motoboy/pedido-entregue/pedido-entregue.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tela-inicio', component: TelaInicioComponent },
    { path: 'gestao', component: GestaoComponent },
    { path: 'cardapio', component: CardapioComponent},
    { path: 'adicionar-prato', component: AdicionarPratoComponent },
    { path: 'pedido', component: PedidoComponent },
    { path: 'acompanhar-pedido', component: AcompanharPedidoComponent },
    { path: 'finalizacao', component: FinalizacaoComponent },
    { path: 'inicio-c', component: InicioComponent },
    { path: 'preparar', component: PrepararComponent },
    { path: 'preparando', component: PreparandoComponent },
    { path: 'finalizados', component: FinalizadosComponent },
    { path: 'notificando-moto', component: NotificandoMotoComponent },
    { path: 'tela-inicial', component: TelaInicialComponent },
    { path: 'aceitar-entrega', component: AceitarEntregaComponent },
    { path: 'dados-restaurante', component: DadosRestauranteComponent },
    { path: 'pedido-entregue', component: PedidoEntregueComponent },
];
