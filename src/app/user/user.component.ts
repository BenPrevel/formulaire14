import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  number = new FormControl('');
  street = new FormControl('');
  zipCode = new FormControl('');
  city = new FormControl('');

  newUser: User = new User();

  userSubmit() {
    this.newUser.userName = this.username.value;
    this.newUser.email = this.email.value;
    this.newUser.password = this.password.value;
    this.newUser.number = this.number.value;
    this.newUser.street = this.street.value;
    this.newUser.zipCode = this.zipCode.value;
    this.newUser.city = this.city.value;
  }

  constructor() {}
}
