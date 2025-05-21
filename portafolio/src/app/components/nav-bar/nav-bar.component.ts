import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  @ViewChild('navbar') navbar!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const navbarEl = this.navbar.nativeElement;
        if (navbarEl.classList.contains('show')) {
          // Cierra el menú usando Bootstrap collapse
          new bootstrap.Collapse(navbarEl).hide();
        }
      }
    });
  }
}
