import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from '../todo-list/todo-list.model';

import { TodosService } from '../todo-list/todo-list.service';
import { AuthService } from '../auth/auth.service';
import { take, exhaustMap, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StorageTodo {
  constructor(
    private http: HttpClient,
    private todosService: TodosService,
    private authService: AuthService
  ) {}

  storeTodos() {
    const todos = this.todosService.getTodos();
    this.http
      .put('https://todo-list-angular-6395f.firebaseio.com/todos.json', todos)
      .subscribe((response) => console.log(response));
  }

  fetchTodos() {
    return this.http.get<Todo[]>(
      'https://todo-list-angular-6395f.firebaseio.com/todos.json'
    );
  }
}
