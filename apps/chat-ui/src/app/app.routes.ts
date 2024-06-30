import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'home',
        loadComponent: () => import('../pages/home/homepage.component').then((x) => x.HomepageComponent),
    },
    {
        path: 'chat',
        loadComponent: () => import('../pages/chat/chatpage.component').then((x) => x.ChatpageComponent),
    }
];
