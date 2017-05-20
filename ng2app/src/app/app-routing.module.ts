import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent }    from './components/todo-list.component';
import { AuthComponent }    from './components/auth.component';
import { AuthGuard }      from './guards/auth.guard';


const routes: Routes = [
  { path: '',  component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'auth',  component: AuthComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
