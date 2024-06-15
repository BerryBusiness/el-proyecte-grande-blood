import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  onSubmit() {

    console.log(`Email: ${this.email}, Password: ${this.password}`);
  }
}
