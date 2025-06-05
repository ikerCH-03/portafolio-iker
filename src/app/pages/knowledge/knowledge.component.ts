import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Interfaz para cada conocimiento
interface Knowledge {
  name: string;
  icon: string;
  level: string;
}

@Component({
  selector: 'knowledge-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  // Variables del componente
  frontendKnowledge: Knowledge[] = [
    { name: 'Angular', icon: 'assets/icons/angular.png', level: 'Avanzado' },
    { name: 'TypeScript', icon: 'assets/icons/tp.png', level: 'Intermedio' },
    { name: 'HTML5', icon: 'assets/icons/html.webp', level: 'Avanzado' },
    { name: 'JavaScript', icon: 'assets/icons/js.webp', level: 'Intermedio' },
    { name: 'CSS3', icon: 'assets/icons/css3.svg', level: 'Avanzado' },
    { name: 'SCSS', icon: 'assets/icons/scss.svg', level: 'Intermedio' },
  ];

  backendKnowledge: Knowledge[] = [
    { name: 'Java', icon: 'assets/icons/java.png', level: 'Bajo' },
    { name: 'Php', icon: 'assets/icons/php.png', level: 'Bajo' },
    { name: 'Symfony', icon: 'assets/icons/symfony.png', level: 'Intermedio' },
    { name: 'Python', icon: 'assets/icons/python.webp', level: 'Intermedio' },
    { name: 'MySql', icon: 'assets/icons/mysql.png', level: 'Intermedio' },
  ];

  // Método para rellenar la barra y su color dependiendo del nivel
  getLevelData(level: string): { width: string, color: string } {
    switch (level.toLowerCase()) {
      case 'bajo':
      case 'básico':
        return { width: '25%', color: '#f44336' }; // rojo
      case 'medio':
      case 'intermedio':
        return { width: '50%', color: '#ffc107' }; // amarillo
      case 'avanzado':
        return { width: '75%', color: '#67c256' }; // verde
      case 'muy avanzado':
        return { width: '100%', color: '#38833b' }; // verde más fuerte
      default:
        return { width: '0%', color: '#ccc' }; // gris por defecto
    }
  }

}
