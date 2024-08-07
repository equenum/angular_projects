import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

import type { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Input accepts a configuration object
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;

  // emits an event that can be consumed by parent components
  @Output() userSelected = new EventEmitter<string>();

  get avatarUrl() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(): void {
    this.userSelected.emit(this.user.id);
  }
}
