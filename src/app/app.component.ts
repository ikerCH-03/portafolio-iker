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

  cambiarModo() {
    // Cambiar el tema de la aplicación
    const temaActual = document.documentElement.getAttribute('data-bs-theme');
    const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
    
    let luna = document.getElementById('luna');
    let sol = document.getElementById('sol');

    if (nuevoTema == 'dark') {
      sol?.classList.remove('solActive');
      luna?.classList.add('lunaActive');
    } else {
      luna?.classList.remove('lunaActive');
      sol?.classList.add('solActive');
    }

    document.documentElement.setAttribute('data-bs-theme', nuevoTema);
  }
}
