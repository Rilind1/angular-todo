import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from './todo-list.model';
import { TodosService } from './todo-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  // todoTitle: string;
  todos: Todo[];
  // filter: string;
  private subscription: Subscription;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    // this.filter = 'all';
    this.todos = this.todosService.getTodos();
    this.subscription = this.todosService.todosChanged.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // addTodo() {
  //   this.todos.push({
  //     id: 1,
  //     title: this.todoTitle,
  //     completed: false,
  //     editing: false,
  //   });
  //   this.todoTitle = '';
  // }

  // onDelete(id: number) {
  //   this.todos = this.todos.filter((todo) => todo.id !== id);
  // }

  // todoFiltered(): Todo[] {
  //   if (this.filter === 'all') {
  //     return this.todos;
  //   } else if (this.filter === 'active') {
  //     return this.todos.filter((todo) => !todo.completed);
  //   } else if (this.filter === 'completed') {
  //     return this.todos.filter((todo) => todo.completed);
  //   }
  //   return this.todos;
  // }

  // onSaveData() {
  //   this.storage.storeTodos();
  // }
}
