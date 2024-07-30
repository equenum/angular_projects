import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { User } from './models/user';
import { DUMMY_USERS } from './data/dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[];

  constructor() {
    this.users = DUMMY_USERS as User[];
  }

  onSelectUser(id: string) {
    console.log(`Selected user with id: ${id}.`);
  }
}
