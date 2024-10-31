import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dados-restaurante',
  standalone: true,
  imports: [],
  templateUrl: './dados-restaurante.component.html',
  styleUrl: './dados-restaurante.component.css'
})
export class DadosRestauranteComponent {

  constructor(
    private router: Router,
    private location: Location ) {}

  voltarPaginaAnterior() {
    this.location.back();
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }

  RetirarPedido() {
    this.router.navigate(['/pedido-entregue'])
  }


}
