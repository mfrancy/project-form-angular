import { Component, EventEmitter, inject, OnInit, Output, output } from '@angular/core';
import { Card } from "primeng/card";
import { FloatLabel } from "primeng/floatlabel";
import { Button } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from "@angular/router";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateUser } from '../../models/user.interface';

@Component({
  selector: 'app-login-form',
  imports: [Card, FloatLabel, Button, InputTextModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm implements OnInit{
fb = inject(FormBuilder);
@Output() loginUser = new EventEmitter<CreateUser>()

formLogin:any;

ngOnInit(): void {
  const usuario = localStorage.getItem('userData')
  console.log(usuario)
  this.formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
}

onSubmit() {
  if (this.formLogin.invalid) return;
  const formValue = this.formLogin.getRawValue()
  return this.loginUser.emit(formValue)

}


}
