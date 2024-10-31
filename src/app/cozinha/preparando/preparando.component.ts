import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-preparando',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './preparando.component.html',
  styleUrl: './preparando.component.css'
})
export class PreparandoComponent {

  constructor (
    private router: Router,
    private location: Location){}

  finalizados() {

    this.router.navigate(['/finalizados']);
  }

  voltarPaginaAnterior() {
    this.location.back();
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }

}
