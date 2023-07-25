import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private messages: string[] = [];
  private tasks: Task[] = [];
  private tasksUrl = 'api/tasks'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getMessages(): string[] {
    return this.messages;
  }

  addMessage(message: string): void {
    this.messages.push(message);
  }

  clearMessages(): void {
    this.messages = [];
  }

//////////////////////////////////////////////
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  ///////////////add task
  // addTask(title: string): Observable<Task> {
  //   const newTask: Task = {
  //     id: this.generateUniqueId(),
  //     title: title,
  //     checked: false
  //   };
  //   return this.http.post<Task>(this.tasksUrl, newTask, this.httpOptions);
  // }

  addTask(title: string): Observable<Task> {
    const newTask: Task = {
      id: this.generateUniqueId(),
      title: title,
      checked: false
    };
    return this.http.post<Task>(this.tasksUrl, newTask, this.httpOptions).pipe(
      tap((newTask: Task) => {
        this.log(`Added task with id=${newTask.id}`);
        this.addMessage(`Task "${newTask.title}" added successfully.`);
      }),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  

//////////////////////delet task//////////////
  // deleteTask(id: number): Observable<Task> {
  //   const url = `${this.tasksUrl}/${id}`;
  //   return this.http.delete<Task>(url, this.httpOptions);
  // }

  deleteTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<Task>(url, this.httpOptions).pipe(
      tap(_ => {
        this.log(`Deleted task with id=${id}`);
        this.addMessage(`Task with ID ${id} deleted successfully.`);
      }),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  /////////////////Update Task//////////////////////
  updateTask(task: Task): Observable<any> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.put(url, task, this.httpOptions);
  }


/////////////////////////////////Search task
  searchTasks(term: string): Observable<Task[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Task[]>(`${this.tasksUrl}/?title=${term}`);
  }
///////////////////////////////////////// Generating Unique ID
  private generateUniqueId(): number {
    return Math.floor(Math.random() * 100) + 1;
  }


  //////////////////////////////Completed
  markTaskAsCompleted(task: Task): Observable<any> {
    task.checked = true; // Set the 'checked' property to true
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.put(url, task, this.httpOptions).pipe(
      tap(_ => this.log(`Marked task with id=${task.id} as completed`)),
      catchError(this.handleError<any>('markTaskAsCompleted'))
    );
  }
}
