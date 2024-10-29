import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Router, } from '@angular/router';
import { Location } from '@angular/common';

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
  categoria: string = 'principal';
  categorias: string[] = ['principal', 'bebida', 'sobremesa'];
  mensagem: string | null = null; // Mensagem de feedback
  pratos: any[] = []; // Adicione esta linha
  pratosPrincipais: any[] = []; // Adicione esta linha
  pratosBebidas: any[] = []; // Adicione esta linha
  pratosSobremesas: any[] = []; // Adicione esta linha


  onImageSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imagemPreview = e.target?.result as string; // Armazena a URL da imagem para visualização
      };

      reader.readAsDataURL(file); // Lê o arquivo como URL
    } else {
      // Verifique se o usuário colou uma URL
      const pastedUrl = fileInput.value;
      if (pastedUrl) {
          this.imagemPreview = pastedUrl; // Mostra a imagem como preview
          this.imagemUrl = pastedUrl.replace(/\[.*?\]/, ""); // Remove os caracteres indesejados, se necessário
      }
    }
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location) {}

  onSubmit() {
    if (!this.nomePrato || this.preco === null || !this.imagemPreview) {
      this.mensagem = 'Por favor, preencha todos os campos antes de enviar.';
      return;
    }

    const formData = new FormData();
    formData.append('nomePrato', this.nomePrato);
    formData.append('preco', this.preco !== null ? this.preco.toString() : '0');
    formData.append('categoria', this.categoria);

    const fileInput = document.getElementById('imagem') as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
        formData.append('imagem', fileInput.files[0]); // Aqui você adiciona o arquivo da imagem
    } else {
        console.error('Nenhum arquivo de imagem selecionado.');
        return; // Opcional: retorne se não houver arquivo de imagem
    }

    this.http.post('http://localhost:8080/api/pratos', formData).subscribe(
        response => {
            console.log('Prato adicionado com sucesso:', response);
            this.mensagem = 'Prato adicionado com sucesso!'; // Mensagem de sucesso
            this.resetForm();
            this.getPratos();
        },
        error => {
            console.error('Erro ao adicionar prato:', error);
        }
    );
}
private getPratos() {
  this.http.get<any[]>('http://localhost:8080/api/pratos').subscribe(
      pratos => {
          this.pratos = pratos;
          this.pratosPrincipais = pratos.filter(prato => prato.categoria === 'principal');
          this.pratosBebidas = pratos.filter(prato => prato.categoria === 'bebida');
          this.pratosSobremesas = pratos.filter(prato => prato.categoria === 'sobremesa');
      },
      error => {
          console.error('Erro ao buscar pratos:', error);
      }
    );
  }

    private resetForm() {
      this.nomePrato = '';
      this.preco = null;
      this.imagemPreview = null;
      this.categoria = 'principal';
    }

    voltarPaginaAnterior() {
      this.location.back();
    }
    voltarParaMenu() {
      this.router.navigate(['/menu']);
    }
}
