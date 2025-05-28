import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'error-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss'
})
export class Error404Component {}
