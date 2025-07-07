import { ThemeService } from './../../core/services/theme.service';
import { AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'welcome-page',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements AfterViewInit, OnDestroy {

  private themeSub!: Subscription;

  constructor(private el: ElementRef, private router: Router, private themeService: ThemeService) { }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  ngAfterViewInit(): void {
    this.animateText('animated-text', 'text-path');

    this.themeSub = this.themeService.cambioTema().subscribe(() => {
      // Reinicia la animación al cambiar el tema
      this.animateText('animated-text', 'text-path');
    });
  }

  ngOnDestroy(): void {
    this.themeSub?.unsubscribe();
  }
  // Animación de las letras de bienevenida
  animateText(svgId: string, textId: string): void {
    const svgElement = this.el.nativeElement.querySelector(`#${svgId}`) as SVGSVGElement;
    const textElement = svgElement.querySelector(`#${textId}`) as SVGTextElement;

    if (!svgElement || !textElement) {
      console.error(`SVG or text element not found. Check IDs: ${svgId}, ${textId}`);
      return;
    }

    let currentFrame = 0;
    const totalFrames = 1600; // Ajusta la duración de la animación (más alto = más lento)
    const dashLength = 1000; // Un valor arbitrario para el largo del trazo
    textElement.style.strokeDasharray = `${dashLength}`;
    textElement.style.strokeDashoffset = `${dashLength}`;
    textElement.style.fill = 'transparent'; // Relleno inicial

    // Función de easing (suavizado) para el trazo
    const easeOutCubic = (t: number) => {
      return 1 - Math.pow(1 - t, 3); // Suaviza la animación hacia el final
    };

    const drawStroke = () => {
      const progress = currentFrame / totalFrames;
      const easedProgress = easeOutCubic(progress);

      if (easedProgress >= 0.26) {
        // Animación del trazo completada
        textElement.style.strokeDashoffset = '0';
        // Comienza la animación de relleno del color después de que el trazo esté completo
        fillAnimation();
      } else {
        currentFrame++;
        const offset = dashLength * (1 - easedProgress); // Usar el progreso suavizado
        textElement.style.strokeDashoffset = `${offset}`;
        requestAnimationFrame(drawStroke);
      }
    };

    // Función de animación de relleno
    const fillAnimation = () => {
      let fillProgress = 0;
      const fillDuration = 60; // Duración de la animación de relleno (aproximadamente 1 segundo)

      const fillStep = () => {
        fillProgress++;
        const progress = fillProgress / fillDuration;
        if (progress < 1) {
          // Cambio gradual del color de relleno desde transparente
          const temaActual = document.documentElement.getAttribute('data-bs-theme');

          if (temaActual === 'light') {
            textElement.style.fill = `rgba(10, 16, 47, ${progress})`; // Relleno para el fondo claro
          } else {
            textElement.style.fill = `rgba(255, 255, 255, ${progress})`; // Relleno para el fondo oscuro
          }

          requestAnimationFrame(fillStep);
        }
      };

      fillStep();
    };

    drawStroke();
  }

}
