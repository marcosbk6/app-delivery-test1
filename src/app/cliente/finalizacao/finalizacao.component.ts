import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalizacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finalizacao.component.html',
  styleUrl: './finalizacao.component.css'
})
export class FinalizacaoComponent {


  constructor(
    private router: Router,
    private location: Location) {}

  voltarPaginaAnterior() {
    this.location.back();
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }
}
