import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(
  private router: Router,
  private location: Location
){}

  onEnterClick() {
    console.log('Botão Entrar clicado');
    this.router.navigate(['/gestao']);  // Altere para a rota do MenuComponent
  }

  voltarPaginaAnterior() {
    this.location.back();
  }
  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }

}
