import { Routes } from '@angular/router';
import { FormLogin } from './components/form-login/form-login';

export const routes: Routes = [
    {path: '', component: FormLogin,
        title: 'Login'
    }
];
