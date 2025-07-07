import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private darkMode = false;

    // Atributo para la página de bienvenida cuando cambie el color
    private themeChanged$ = new BehaviorSubject<string>('dark');


    // Método para cambiar el color
    cambioColor() {
        this.darkMode = !this.darkMode;

        const temaActual = document.documentElement.getAttribute('data-bs-theme');
        const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-bs-theme', nuevoTema);

        // Emitir el cambio de tema
        this.themeChanged$.next(nuevoTema);
    }

    // Método para comprobar que esta en modo oscuro
    esModoOscuro(): boolean {
        return this.darkMode;
    }

    // Método para comprobar que se ha cambiado el tema
    cambioTema() {
        return this.themeChanged$.asObservable();
    }
}
