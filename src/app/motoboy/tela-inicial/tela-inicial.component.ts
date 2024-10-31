import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {

  constructor (
    private router: Router,
    private location: Location){}

  irParaAceitarEntrega() {
    this.router.navigate(['/aceitar-entrega'])
  }

  voltarPaginaAnterior() {
    this.location.back();
  }
}
