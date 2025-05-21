import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NoopAnimationPlayer } from '@angular/animations';
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
// import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';
  constructor(private router: Router) {}

  // Verifica si la ruta actual es 'welcome'
  get showNavBar(): boolean {
    return this.router.url !== '/';
  }

  // Verificar si esta en la página de error
  get errorPage(): boolean {
    return this.router.url === '/error404';
  }
}
