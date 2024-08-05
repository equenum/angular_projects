import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

import type { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() taskCompleted = new EventEmitter<string>();

  onComplete(): void {
    this.taskCompleted.emit(this.task.id);
  }
}
