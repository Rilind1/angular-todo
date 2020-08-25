import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodosService } from './todo-list/todo-list.service';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';

const routes: Routes = [{ path: 'todo-list', component: TodoListComponent }];

@NgModule({
  declarations: [AppComponent, TodoListComponent, AuthComponent, TodoItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientTestingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
