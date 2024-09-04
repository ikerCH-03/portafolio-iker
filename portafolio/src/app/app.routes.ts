import { Routes } from '@angular/router';
import { MostrarPortComponent } from './pages/mostrar-port/mostrar-port.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'portafolio', component: MostrarPortComponent },
    { path: '**',redirectTo:'',pathMatch:'full'}
];
