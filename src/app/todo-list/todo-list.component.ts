import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo-interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoTitle: string;
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todoTitle = '';
    this.todos = [
      {
        id: 1,
        title: 'Walk',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Eat',
        completed: false,
        editing: false,
      },
    ];
  }

  onAdd() {
    this.todos.push({
      id: 3,
      title: this.todoTitle,
      completed: false,
      editing: false,
    });
    this.todoTitle = '';
  }
}
