import { Routes } from '@angular/router';
/*import { MostrarPortComponent } from './pages/mostrar-port/mostrar-port.component';*/
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'home', component:  HomeComponent},
    { path: '**',redirectTo:'',pathMatch:'full'}
];
