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
  newtodos: Todo[] = [];
  @Input() todo: Todo = new Todo();

  constructor(
    private todoService: TodoService,
  ){}
  ngOnInit(): void {
    this.todoService.getAllTodo()
      .then(todos => this.todos = todos);
  }

  // 保存ボタンを押した時の挙動
  save(): void {
    this.todoService
      .create(this.todo)
      .then(data => {this.getNewTodo()});
    this.todo = new Todo();
  }

  // 最新の一件を呼び出す挙動
  getNewTodo(): void {
    this.todoService
      .getNewTodo()
      .then(res => {this.pushData(res)});
  }

  // htmlに渡すnewtodosにデータをpushする
  pushData(data: Todo): void {
    this.newtodos.push(data);
    console.log(this.newtodos);
  }

  delete(id): void {
    this.todoService
      .delete(id);
  }

}
