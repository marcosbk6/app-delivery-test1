import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {

  constructor(private router: Router, private location: Location) {}


  finalizarPedido() {
    this.router.navigate(['/acompanhar-pedido']);
  }


  cancelarPedido() {
    this.router.navigate(['/']);
  }

  voltarPaginaAnterior() {
    this.location.back();
  }

}
