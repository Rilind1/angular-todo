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
  filter: string;

  constructor() {}

  ngOnInit() {
    this.filter = 'all';
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

  addTodo() {
    this.todos.push({
      id: 1,
      title: this.todoTitle,
      completed: false,
      editing: false,
    });
    this.todoTitle = '';
  }

  onDelete(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  todoFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter((todo) => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter((todo) => todo.completed);
    }
    return this.todos;
  }
}
