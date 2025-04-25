import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Proyecto {
  name: string;
  info: string;
  img: string;
  git: string;
  internet: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  proyectos: Proyecto[] = [
    {
      name: "Multitasking", info: "Proyecto desarrollado con Symfony que permite a usuarios publicar tareas y a otros usuarios postularse para realizarlas a cambio de una remuneración.Incluye valoraciones y perfiles para asegurar confianza entre las partes.",
      img: "assets/multitasking.png", git: "https://github.com/ikerCH-03/Multitasking-proyecto", internet: ""
    },
    {
      name: "Multifunción", info: "Se trata de un proyecto donde se encuentran varias funciones(calculadora,tiempo,países) realizado con angular.",
      img: "assets/multifunción.jpg", git: "https://github.com/ikerCH-03/proyecto-multifuncion", internet: ""
    },
    {
      name: "Multitasking", info: "Proyecto desarrollado con Symfony que permite a usuarios publicar tareas y a otros usuarios postularse para realizarlas a cambio de una remuneración.Incluye valoraciones y perfiles para asegurar confianza entre las partes.",
      img: "assets/multitasking.png", git: "https://github.com/ikerCH-03/Multitasking-proyecto", internet: ""
    },
  ]
}
