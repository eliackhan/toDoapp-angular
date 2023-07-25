import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoApp';
  messages: string[] = [];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.messages = this.todoService.getMessages();
  }

  clearMessages(): void {
    this.todoService.clearMessages();
    this.messages = [];
  }
}
