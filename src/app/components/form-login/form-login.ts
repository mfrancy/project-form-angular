import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';

const COMPONENTS = [
  ButtonModule,
  CardModule,
  FormsModule,
  FloatLabelModule,
  InputTextModule,
  PasswordModule,
];

const MODULES = [
  ReactiveFormsModule
]

@Component({
  selector: 'app-form-login',
  imports: [...COMPONENTS, ...MODULES],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css',
})
export class FormLogin implements OnInit {
  fb = inject(FormBuilder);
  formSubscribe: any;

  onSubmit() {}

  ngOnInit() {
    this.formSubscribe = this.fb.group({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      name: ['OI', Validators.required],
      nascimento: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
}
