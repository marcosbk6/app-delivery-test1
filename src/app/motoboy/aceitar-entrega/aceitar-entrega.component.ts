import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aceitar-entrega',
  templateUrl: './aceitar-entrega.component.html',
  styleUrls: ['./aceitar-entrega.component.css']
})
export class AceitarEntregaComponent {

  constructor(
    private router: Router,
    private location: Location ) {}

  voltarPaginaAnterior() {
    this.location.back();
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }

  AceitarPedido() {
    this.router.navigate(['/dados-restaurante'])
  }

  RecusarPedido () {
    this.location.back();
  }


}
