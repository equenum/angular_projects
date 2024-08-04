import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../data/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

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
  tasks: Task[] = DUMMY_TASKS as Task[];
  isAddingTask: boolean = false;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.selectedUserId);
  }

  onTaskCompleted(id: string): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onAddTaskCanceled() {
    this.isAddingTask = false;
  }

  onTaskAdded(taskData: TaskData) {
    const newTask: Task = {
      id: `t${this.tasks.length + 1}`,
      userId: this.selectedUserId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };

    this.tasks.push(newTask);
    this.isAddingTask = false;
  }
}
