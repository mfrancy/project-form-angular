import { inject, Injectable } from '@angular/core';
import { CreateUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  registerUser(user: CreateUser) {
    const stored = localStorage.getItem('userData');
    const users: CreateUser[] = JSON.parse(stored ?? '[]');

    users.push(user);

    localStorage.setItem('userData', JSON.stringify(users));
  }

  loginUser(email: string, password:string) {
    const stored = localStorage.getItem('userData');
    const users: CreateUser[] = JSON.parse(stored ?? '[]');

    const user = users.find(usuario => usuario.email === email && usuario.password === password)

    if (!user) return false

    return true

  }
}
