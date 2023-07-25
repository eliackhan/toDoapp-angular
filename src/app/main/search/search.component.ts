import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Task } from 'src/app/task.model';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  tasks$!: Observable<Task[]>;
  

  constructor(private todoService: TodoServiceService) {}

  ngOnInit(): void {
    this.tasks$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.todoService.searchTasks(term))
    );
  }

  performSearch(term: string) {
    this.searchTerms.next(term);
  }

}