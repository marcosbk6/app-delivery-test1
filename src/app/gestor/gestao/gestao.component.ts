import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestao',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './gestao.component.html',
  styleUrl: './gestao.component.css',
})
export class GestaoComponent {

  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/menu']); // substitua '/menu' pela rota correta do menu no seu aplicativo
  }

  onAddDishClick() {
    // Lógica para adicionar prato
    console.log('Adicionar Prato clicado');
    this.router.navigate(['/adicionar-prato'])
  }

  onOrderHistoryClick() {
    // Lógica para visualizar histórico de pedidos
    console.log('Histórico de Pedidos clicado');
  }
}
