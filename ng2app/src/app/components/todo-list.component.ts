import { Component } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/todo-list.component.html',
  styleUrls: ['../static/todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  constructor(
    private todoService: TodoService
  ){}
  ngOnInit(): void {
  this.todoService.getAllTodo()
    .then(todos => this.todos = todos);
  }
}
