import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';



const COMPONENTS = [ButtonModule, CardModule, FormsModule, FloatLabelModule, InputTextModule]


@Component({
  selector: 'app-form-login',
  imports: [...COMPONENTS],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css',
})
export class FormLogin {

}
