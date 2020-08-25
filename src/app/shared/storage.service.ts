import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodosService } from '../todo-list/todo-list.service';

@Injectable({ providedIn: 'root' })
export class StorageTodo {
  constructor(private http: HttpClient, private todosService: TodosService) {}

  storeTodos() {
    const todos = this.todosService.getTodos();
    this.http
      .put('https://todo-list-angular-6395f.firebaseio.com/todos.json', todos)
      .subscribe((response) => console.log(response));
  }
}
