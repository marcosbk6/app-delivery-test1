import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PratoService } from '../../services/prato.service';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
  providers: [PratoService]
})
export class CardapioComponent implements OnInit {
  selectedTab: string = 'hamburguer';
  pratos: any[] = [];
  carrinho: string[] = [];

  constructor(private pratoService: PratoService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.pratoService.getPratos().subscribe(
      (data) => {
        this.pratos = data;
      },
      (error) => {
        console.error('Erro ao buscar pratos:', error);
      }
    );
  }
  

  adicionarProduto(produto: string) {
    this.carrinho.push(produto);
    console.log(`${produto} adicionado ao carrinho.`);
  }


  getQuantidadeCarrinho(): number {
    return this.carrinho.length;
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





