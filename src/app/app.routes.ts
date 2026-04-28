import { Routes } from '@angular/router';
import { SubscribePage } from './pages/subscribe-page/subscribe-page';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
    {path: '', component: SubscribePage,
        title: 'Subscribe'
    },
    {path: 'login', component: LoginPage,
        title: 'Login'
    }
];
