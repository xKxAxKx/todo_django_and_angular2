import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { TodoService } from '../services/todo.service';
import { Todo, NewTodo } from '../models/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/todo-list.component.html',
  styleUrls: ['../static/todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  // 本当はresultsの部分だけいれたい。というか、resultsをメソッドの中でぬき出せればnewtodoは不要になる
  newtodo: NewTodo[] = [];
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
    this.todoService
      .getNewTodo()
      .then(newtodo => this.newtodo = newtodo);
  }

  delete(id): void {
    this.todoService
      .delete(id);
  }

}
