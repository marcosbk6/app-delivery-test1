import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}

  onButtonClick(role: string){
    console.log(`${role} button clicked`);
    if (role === 'Gestor') {
      this.router.navigate(['/home']);
    } else if ( role=== 'Cliente') {
      this.router.navigate(['/tela-inicio']);
      // Lógica para outros botões
    }
  }
}
