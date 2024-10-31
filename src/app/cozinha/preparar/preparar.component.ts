import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-preparar',
  imports: [RouterModule, CommonModule],
  templateUrl: './preparar.component.html',
  styleUrl: './preparar.component.css'
})
export class PrepararComponent {

  constructor(
  private router: Router,
  private location: Location){}

  preparando() {

    this.router.navigate(['/preparando']);
  }

  voltarPaginaAnterior() {
    this.location.back();
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }


}
