import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent }    from './components/todo-list.component';
import { TodoComponent }    from './components/todo.component';

const routes: Routes = [
  { path: '',  component: TodoListComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
