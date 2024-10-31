import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-inicio',
  imports: [RouterModule, CommonModule],
  templateUrl: './inicio-c.component.html',
  styleUrls: ['./inicio-c.component.css']
})
export class InicioComponent {
  constructor(
    private router: Router,
    private location: Location) {}

  onButtonClick(role: string){
    console.log(`${role} button clicked`);
    if (role === 'Preparar') {
      this.router.navigate(['/preparar']);
    } else if ( role=== 'Finalizados') {
      this.router.navigate(['/finalizados']);
      // Lógica para outros botões
    }
  }

  voltarPaginaAnterior() {
    this.location.back();
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }



}
