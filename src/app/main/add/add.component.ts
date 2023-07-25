import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tasks: Task[] = [];


  constructor(private todoService: TodoServiceService) { }
  ngOnInit() { }

  addTask(title: string) {
    if (!title) { return; }
    this.todoService.addTask(title).subscribe((reuslt) => {
      this.tasks.push(reuslt);
    })
  }

  editTask(task: Task) {
    const editedTitle = prompt('Edit Task Title:', task.title);
    if (editedTitle !== null && editedTitle.trim() !== '') {
      const editedTask = { ...task, title: editedTitle };
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = editedTask;
        this.todoService.updateTask(editedTask).subscribe();
      }
    }
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.todoService.deleteTask(task.id).subscribe();
  }

  clearAllTasks() {
    this.tasks = [];
  }

}
