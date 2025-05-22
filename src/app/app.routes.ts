import { Routes } from '@angular/router';
/*import { MostrarPortComponent } from './pages/mostrar-port/mostrar-port.component';*/
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProjectComponent } from './pages/project/project.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { Error404Component } from './shared/errors/error404/error404.component';


export const routes: Routes = [
    { path: 'home', component:  HomeComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'projects', component: ProjectComponent},
    { path: '', component: WelcomeComponent, pathMatch:'full' },

    // Página de error
    { path: 'error404',component: Error404Component},
    { path: '**',redirectTo:'error404',}
];