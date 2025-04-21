import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  level: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  frontendSkills: Skill[] = [
    { name: 'Angular', icon: 'assets/icons/angular.png', level: 'Bajo' },
    { name: 'TypeScript', icon: 'assets/icons/tp.png', level: 'Bajo' },
    { name: 'HTML5', icon: 'assets/icons/html.webp', level: 'Avanzado' },
    { name: 'CSS3', icon: 'assets/icons/css3.svg', level: 'Intermedio' },
    { name: 'JavaScript', icon: 'assets/icons/js.webp', level: 'Intermedio' },
    //Añade más frontend aquí
  ];

  backendSkills: Skill[] = [
    { name: 'Java', icon: 'assets/icons/java.png', level: 'Bajo' },
    { name: 'Php', icon: 'assets/icons/php.png', level: 'Bajo' },
    { name: 'Symfony', icon: 'assets/icons/symfony.png', level: 'Intermedio' },
    { name: 'Python', icon: 'assets/icons/python.webp', level: 'Intermedio' },
    { name: 'MySql', icon: 'assets/icons/mysql.png', level: 'Intermedio' },

    //Añade más backend aquí
  ];

  getLevelData(level: string): { width: string, color: string } {
    switch (level.toLowerCase()) {
      case 'bajo':
      case 'básico':
        return { width: '33%', color: '#f44336' }; // rojo
      case 'medio':
      case 'intermedio':
        return { width: '66%', color: '#ffc107' }; // amarillo
      case 'avanzado':
        return { width: '100%', color: '#4caf50' }; // verde
      default:
        return { width: '0%', color: '#ccc' }; //      gris por defecto
    }
  }
  
}
