import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
   ) {}

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }
}
