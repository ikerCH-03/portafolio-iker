import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'knowledge',
        loadComponent: () => import('./pages/knowledge/knowledge.component').then(m => m.KnowledgeComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/project/project.component').then(m => m.ProjectComponent)
    },
    {
        path: '',
        loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent)
    },
    
    { path: '**', redirectTo: 'about', }
];