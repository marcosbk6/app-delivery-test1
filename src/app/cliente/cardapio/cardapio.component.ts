import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PratoService } from '../../services/prato.service';
import { PedidoService } from '../../services/pedido.service';
import { Prato } from '../../models/prato.model';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
  providers: [PratoService, PedidoService]
})
export class CardapioComponent implements OnInit {
  selectedTab: string = 'principais';
  pratos: any[] = [];
  pratosPrincipais: any[] = []; 
  pratosBebidas: any[] = []; 
  pratosSobremesas: any[] = []; 

  constructor(
    private pratoService: PratoService, 
    private router: Router, 
    private location: Location,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.pratoService.getPratos().subscribe(
      (data) => {
        console.log('Pratos recebidos do servidor:', data); // Adicione esta linha para depuração
        this.pratos = data;
        this.pratosPrincipais = this.pratos.filter(prato => prato.categoria === 'principal');
        this.pratosBebidas = this.pratos.filter(prato => prato.categoria === 'bebidas');
        this.pratosSobremesas = this.pratos.filter(prato => prato.categoria === 'sobremesas');
        console.log('Pratos carregados:', this.pratos); // Verifique a estrutura aqui

      },
      (error) => {
        console.error('Erro ao buscar pratos:', error);
      }
    );
  }
  

  adicionarProduto(prato: Prato) {
    if (prato && prato.nome) { // Verifica se o prato é válido
        this.pedidoService.adicionarPrato(prato); 
        console.log(`${prato.nome} adicionado ao carrinho.`);
    } else {
        console.error('Prato inválido ou sem nome:', prato);
    }
}


  getQuantidadeCarrinho(): number {
    return this.pedidoService.getPratos().length; // Retorna a quantidade de pratos no pedido

  }

  irParaPedido() {
    this.router.navigate(['/pedido']);
  }

  voltarPaginaAnterior() {
    this.location.back();
  }

  getImagemUrl(imagem: string): string {
    return imagem;
  }
  
}






