import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { DUMMY_TASKS } from '../data/dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string;
  @Input({ required: true }) userName!: string;
  tasks: Task[] = DUMMY_TASKS as Task[];

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.selectedUserId);
  }

  onTaskCompleted(id: string): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
