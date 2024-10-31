import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-entregue',
  standalone: true,
  imports: [],
  templateUrl: './pedido-entregue.component.html',
  styleUrl: './pedido-entregue.component.css'
})
export class PedidoEntregueComponent {

  constructor(private router: Router){}

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }

}
