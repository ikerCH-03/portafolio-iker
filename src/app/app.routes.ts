import { Routes } from '@angular/router';

import { Error404Component } from './shared/errors/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { ProjectComponent } from './pages/project/project.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'knowledge', component: KnowledgeComponent },
    { path: 'projects', component: ProjectComponent },
    { path: '', component: WelcomeComponent, pathMatch: 'full' },

    // Página de error
    { path: 'error404', component: Error404Component },
    { path: '**', redirectTo: 'error404', }
];