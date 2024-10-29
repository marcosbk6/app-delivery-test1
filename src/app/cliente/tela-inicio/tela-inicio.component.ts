import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tela-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tela-inicio.component.html',
  styleUrl: './tela-inicio.component.css'
})
export class TelaInicioComponent {
  constructor(
    private router: Router,
    private location: Location
  ) {}

  irParaCardapio() {
    this.router.navigate(['/cardapio']);
  }
  voltarPaginaAnterior() {
    this.location.back();
  }

}
