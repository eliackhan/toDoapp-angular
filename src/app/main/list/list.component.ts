import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/task.model';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks:Task[]=[];
  tasks$!: Observable<Task[]>;
  ngOnInit(){
    this.getTasks()
  }
  constructor(private todoService:TodoServiceService){}

  getTasks(){
    this.todoService.getTasks().subscribe((result)=>{
      this.tasks = result;
    })
  }
}
