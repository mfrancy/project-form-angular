import { inject, Injectable } from '@angular/core';
import { CreateUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userlist = [];
  

  registerUser(user: CreateUser) {
    const userData = user
    localStorage.setItem('userData', JSON.stringify(userData))
  }
  
}
