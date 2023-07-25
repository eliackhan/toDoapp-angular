import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export  class MockdataService implements InMemoryDbService  {

  createDb() {
    const tasks: Task[] = [];
    return {tasks};
}
}