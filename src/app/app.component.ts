import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'formulaire14';
}

export class User {
  userName = '';
  email = '';
  password = '';
  number = '';
  street = '';
  zipCode = '';
  city = '';
}
