import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Creación de la interfaz para los proyectos
interface Proyecto {
  name: string;
  info: string;
  img: string;
  git: string;
  internet: string;
}

@Component({
  selector: 'project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  // Variable con los distintos proyectos
  proyectos: Proyecto[] = [
    {
      name: "Pixeloria", info: "Galería web para buscar y mostrar imágenes gratuitas de alta calidad usando la API de Unsplash. Desarrollado con HTML, CSS y JS.",
      img: "assets/pixeloria_img.png", git: "https://github.com/ikerCH-03/Pixeloria", internet: "https://pixeloria.vercel.app/"
    },
    {
      name: "Multifunción", info: "Proyecto desarrollado durante las prácticas que incluye varias funcionalidades como calculadora, gestión de tiempo y consulta de países, todo implementado con Angular.",
      img: "assets/pagina-en-construccion.jpg", git: "", internet: ""
    },
  ]
}
