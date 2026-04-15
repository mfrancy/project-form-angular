import { Component, inject } from '@angular/core';
import { CreateUser } from '../../models/user.interface';
import { SubscribeForm } from '../../components/subscribe-form/subscribe-form';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-subscribe-page',
  imports: [SubscribeForm],
  templateUrl: './subscribe-page.html',
  styleUrl: './subscribe-page.css',
})
export class SubscribePage {
  userService = inject(UserService);


handleSubmit(data: CreateUser) {
  this.userService.registerUser(data);
  console.log(data)
}

}
