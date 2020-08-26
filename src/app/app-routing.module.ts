import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'authenticate', component: AuthComponent },
  { path: 'todo-list', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
