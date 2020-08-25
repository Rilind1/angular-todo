import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodosService } from '../todo-list.service';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo-list.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @ViewChild('forma', { static: false }) tlForm: NgForm;
  subscription: Subscription;
  editedItem: Todo;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.subscription = this.todosService.startedEditing.subscribe(
      (index: number) => {
        this.editedItem = this.todosService.getTodo(index);
        this.tlForm.setValue({
          todo: this.editedItem.title,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTodo = new Todo(value.todo);
    this.todosService.addTodo(newTodo);
    form.reset();
  }
}
