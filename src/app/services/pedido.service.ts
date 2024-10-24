import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prato } from '../models/prato.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:8080/api/pedidos'; // Ajuste para o endpoint do seu backend
  private pratosSelecionados: Prato[] = [];

  constructor(private http: HttpClient  ) {}

  criarPedido(pratos: Prato[]): Observable<any> {
    const pedido = {
      itens: pratos, // Enviar os itens selecionados no pedido
      total: pratos.reduce((total, prato) => total + prato.preco, 0) // Calcula o total
    };
    return this.http.post(this.apiUrl, pedido);
  }

  adicionarPrato(prato: Prato): void {
    this.pratosSelecionados.push(prato);
  }
  

  getPratos(): Prato[] {
    console.log("Retornando pratos:", this.pratosSelecionados);
    return this.pratosSelecionados;
  }

  limparPedido(): void {
    this.pratosSelecionados = [];
  }
}
