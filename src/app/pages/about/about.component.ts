import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent { }
