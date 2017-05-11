import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent }    from './components/todo-list.component';
import { AuthComponent }    from './components/auth.component';

const routes: Routes = [
  { path: '',  component: TodoListComponent },
  { path: 'login',  component: AuthComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
