import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { CreateUser } from '../../models/user.interface';

const COMPONENTS = [
  ButtonModule,
  CardModule,
  FormsModule,
  FloatLabelModule,
  InputTextModule,
  PasswordModule,
];

const MODULES = [ReactiveFormsModule];

@Component({
  selector: 'app-subscribe-form',
  imports: [...COMPONENTS, ...MODULES],
  templateUrl: './subscribe-form.html',
  styleUrl: './subscribe-form.css',
})
export class SubscribeForm implements OnInit {
  @Output() submitValue = new EventEmitter<CreateUser>();
  fb = inject(FormBuilder);
  formSubscribe!: FormGroup;



  onSubmit() {
    if (this.formSubscribe.invalid) return;
    const formValue = this.formSubscribe.value;
    return this.submitValue.emit(formValue);
  }

  ngOnInit() {
    function passwordValidator(form: FormGroup) {
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmPassword')?.value;

      if (!password || !confirmPassword) {
        return null;
      }

      return password === confirmPassword ? null : { passwordMatch: true };
    }

    this.formSubscribe = this.fb.group(
      {
        name: ['Mariana', Validators.required],
        birthDate: ['10/06/2002', Validators.required],
        email: ['marizinhateste@gmail.com', [Validators.email, Validators.required]],
        password: ['Senha123@', Validators.required],
        confirmPassword: ['Senha123@', Validators.required],
      },
      {
        validators: passwordValidator,
      },
    );
  }
}
