import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acompanhar-pedido',
  standalone: true,
  imports: [],
  templateUrl: './acompanhar-pedido.component.html',
  styleUrl: './acompanhar-pedido.component.css'
})
export class AcompanharPedidoComponent {

  constructor(private router: Router, private location: Location) {}

  voltarPaginaAnterior() {
    this.location.back();
  }


  finalizarEntrega() {
    this.router.navigate(['/finalizacao']);

  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }

}
