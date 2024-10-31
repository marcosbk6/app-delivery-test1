import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-finalizados',
  imports: [RouterModule, CommonModule],
  templateUrl: './finalizados.component.html',
  styleUrl: './finalizados.component.css'
})
export class FinalizadosComponent {

  constructor (
    private router: Router,
    private location: Location){}

  retirar() {

    this.router.navigate(['/notificando-moto']);
  }

  voltarPaginaAnterior() {
    this.location.back();
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }
}
