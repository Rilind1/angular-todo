import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodosService } from '../todo-list.service';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo-list.model';
import { StorageTodo } from '../../shared/storage.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  constructor(
    private todosService: TodosService,
    private storageTodo: StorageTodo
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTodo = new Todo(value.todo);
    this.todosService.addTodo(newTodo);
    form.reset();
  }

  onAddToServer() {
    this.storageTodo.storeTodos();
  }
}
