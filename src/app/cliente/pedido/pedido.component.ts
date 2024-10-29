import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Prato } from '../../models/prato.model';
import { PedidoService } from '../../services/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { PratoService } from '../../services/prato.service';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
  providers: [PratoService]
})
export class PedidoComponent implements OnInit {

  pratos: Prato [] = [];
  total: number =0;

  constructor(
    private router: Router,
    private location: Location,
    private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pratos = this.pedidoService.getPratos(); // Obter pratos do pedido
    this.calcularTotal();
    console.log('Pratos no pedido:', this.pratos); // Verifique a lista aqui
  }

  calcularTotal(): number {
    return this.pratos.reduce((total, prato) => total + prato.preco, 0);
}



  finalizarPedido() {
    this.router.navigate(['/acompanhar-pedido']);
  }


  cancelarPedido() {
    this.pedidoService.limparPedido(); // Limpa o pedido no serviço
    this.pratos = [];
  }

  voltarPaginaAnterior() {
    this.location.back();
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }


}
