import { Component } from '@angular/core';

@Component({
  selector: 'app-gestao',
  standalone: true,
  imports: [],
  templateUrl: './gestao.component.html',
  styleUrl: './gestao.component.css'
})
export class GestaoComponent {
  onAddDishClick() {
    // Lógica para adicionar prato
    console.log('Adicionar Prato clicado');
  }

  onOrderHistoryClick() {
    // Lógica para visualizar histórico de pedidos
    console.log('Histórico de Pedidos clicado');
  }
}
