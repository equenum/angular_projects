import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() addTaskCanceled = new EventEmitter<void>();
  @Output() taskAdded = new EventEmitter<TaskData>();

  title = '';
  summary = '';
  dueDate = '';

  onCancel() {
    this.addTaskCanceled.emit();
  }

  onAdd() {
    const newTask: TaskData = {
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    };

    this.taskAdded.emit(newTask);
  }
}
