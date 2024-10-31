import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificando-moto',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './notificando-moto.component.html',
  styleUrl: './notificando-moto.component.css'
})
export class NotificandoMotoComponent {

  constructor(private router: Router){}

  onButtonClick(role: string){
    console.log(`${role} button clicked`);
    if (role === 'Preparar') {
      this.router.navigate(['/preparar']);
    }
  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }

}
