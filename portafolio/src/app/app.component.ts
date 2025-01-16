import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NoopAnimationPlayer } from '@angular/animations';
import { WelcomeComponent } from "./pages/welcome/welcome.component";
// import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';
}
