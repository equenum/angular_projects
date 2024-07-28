import { Component, computed, signal, WritableSignal } from '@angular/core';
import { User } from '../models/user';
import { DUMMY_USERS } from '../data/dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user: WritableSignal<User>;
  avatarUrl = computed(() => 'assets/users/' + this.user().avatar);

  constructor() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.user = signal(DUMMY_USERS[randomIndex] as User);
  }

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.user.set(DUMMY_USERS[randomIndex] as User);
  }
}
