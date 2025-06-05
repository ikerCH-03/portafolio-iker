import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portafolio de Iker';
  constructor(private router: Router) { }

  // Verifica si la ruta actual es 'welcome'
  get showNavBar(): boolean {
    return this.router.url !== '/';
  }

  // Verificar si esta en la página de error
  get errorPage(): boolean {
    return this.router.url === '/error404';
  }
}
