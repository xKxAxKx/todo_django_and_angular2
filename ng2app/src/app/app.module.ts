import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent }      from './components/todo-list.component';
import { TodoService } from './services/todo.service';
import { AuthComponent }      from './components/auth.component';
import { AuthService }      from './services/auth.service';
import { AuthGuard }      from './guards/auth.guard';
import { HeaderComponent }      from './components/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AuthComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TodoService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
