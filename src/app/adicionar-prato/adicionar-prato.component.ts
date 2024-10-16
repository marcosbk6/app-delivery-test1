import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-adicionar-prato',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './adicionar-prato.component.html',
  styleUrl: './adicionar-prato.component.css'
})
export class AdicionarPratoComponent {
  nomePrato: string = '';
  preco: number | null = null;
  imagemUrl: string | null = null; // URL da imagem
  imagemPreview: string | null = null; // URL da imagem para visualização
  
  

  onImageSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imagemPreview = e.target?.result as string; // Armazena a URL da imagem para visualização
      };

      reader.readAsDataURL(file); // Lê o arquivo como URL
    }
  }

  constructor(private http: HttpClient) {}

   onSubmit() {
    const formData = new FormData();
    formData.append('nomePrato', this.nomePrato);
    formData.append('preco', this.preco !== null ? this.preco.toString() : '0');
    // Aqui você precisa enviar o arquivo da imagem também

    const fileInput = document.getElementById('imagem') as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      formData.append('imagem', fileInput.files[0]);
    }

    this.http.post('http://localhost:8080/api/pratos', formData).subscribe(
      response => {
        console.log('Prato adicionado com sucesso:', response);
      },
      error => {
        console.error('Erro ao adicionar prato:', error);
      }
    );
  }

}
