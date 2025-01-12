import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../data/dummy-tasks';
import { TaskData } from './new-task/new-task.model';

import type { Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = DUMMY_TASKS as Task[];

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
  getByUserId(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  add(taskData: TaskData, userId: string) {
    const newTask: Task = {
      id: `t${this.tasks.length + 1}`,
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };

    this.tasks.push(newTask);
    this.updateLocalStorage();
  }

  remove(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
