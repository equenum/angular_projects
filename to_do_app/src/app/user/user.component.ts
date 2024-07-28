import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Input accepts a configuration object
  @Input({ required: true }) avatar!: string; // component input property binding
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  get avatarUrl() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(): void {
    console.log(`User ${this.id} clicked`);
  }
}
