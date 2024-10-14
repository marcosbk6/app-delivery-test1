import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-prato',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adicionar-prato.component.html',
  styleUrl: './adicionar-prato.component.css'
})
export class AdicionarPratoComponent {
  nomePrato: string = '';
  descricao: string = '';
  preco: number | null = null;
  imagem: File | null = null;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagem = file; // Armazena o arquivo na variável
      console.log('Imagem selecionada:', file);
    }
  }

  onSubmit() {
    // lógica para adicionar o prato
    console.log(`Prato: ${this.nomePrato}, Descrição: ${this.descricao}, Preço: ${this.preco}`);
  }
}
