import { Injectable } from '@angular/core';
import { Prato } from '../models/prato.model'; // Certifique-se de ter o modelo Prato

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pratosDoPedido: Prato[] = [];

  adicionarPrato(prato: Prato) {
    this.pratosDoPedido.push(prato);
  }

  getPratosDoPedido() {
    return this.pratosDoPedido;
  }
}

