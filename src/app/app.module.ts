import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodosService } from './todo-list/todo-list.service';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AuthInterService } from '../app/auth/auth-intercepto.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AuthComponent,
    TodoItemComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    TodosService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
