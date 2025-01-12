import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

import type { Task } from './task/task.model';
import type { TaskData } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string;
  @Input({ required: true }) userName!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(): Task[] {
    return this.tasksService.getByUserId(this.selectedUserId);
  }

  onTaskCompleted(id: string): void {
    this.tasksService.remove(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onAddTaskCanceled() {
    this.isAddingTask = false;
  }

  onTaskAdded(taskData: TaskData) {
    this.tasksService.add(taskData, this.selectedUserId);
    this.isAddingTask = false;
  }
}
