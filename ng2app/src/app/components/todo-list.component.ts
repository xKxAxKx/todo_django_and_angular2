import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/todo-list.component.html',
  styleUrls: ['../static/todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  latestid: any;
  newtodos: Todo[] = [];
  @Input() todo: Todo = new Todo();

  constructor(
    private todoService: TodoService,
  ){}
  ngOnInit(): void {
  this.todoService.getAllTodo()
    .then(todos => this.todos = todos);
  }

  save(): void {
    this.todoService
      .create(this.todo);
    let newtodo = this.todo;
    this.newtodos.push(newtodo);
  }

  delete(id): void {
    this.todoService
      .delete(id);
  }

}
