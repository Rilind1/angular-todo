import { Injectable } from '@angular/core';
import { Todo } from './todo-list.model';
import { Subject } from 'rxjs';

@Injectable()
export class TodosService {
  todosChanged = new Subject<Todo[]>();

  private todos: Todo[] = [];

  getTodos() {
    return this.todos.slice();
  }

  getTodo(index: number) {
    return this.todos[index];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos.slice());
  }

  addTodos(todos: Todo[]) {
    this.todos.push(...todos);
    this.todosChanged.next(todos.slice());
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.todosChanged.next(this.todos.slice());
  }
}
