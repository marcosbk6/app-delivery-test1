import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-finalizacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finalizacao.component.html',
  styleUrl: './finalizacao.component.css'
})
export class FinalizacaoComponent {


  constructor(private location: Location) {}

  voltarPaginaAnterior() {
    this.location.back();
  }
}
