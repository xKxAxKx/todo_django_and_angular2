import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { TodoService } from '../services/todo.service';
import { AuthService } from '../services/auth.service';
import { Todo, LoginUser } from '../models/models';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/todo-list.component.html',
  styleUrls: ['../static/todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newtodos: Todo[] = [];
  @Input() todo: Todo = new Todo();
  currentUser: LoginUser;
  users: LoginUser[] = [];

  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private router: Router,
  ){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

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

  // todoを更新した時の挙動
  update(id: number, title: string): void {
    let todo = {
      id: id,
      title: title
    }
    this.todoService.update(todo);
  }

  // 最新の一件を呼び出す挙動
  getNewTodo(): void {
    this.todoService
      .getNewTodo()
      .then(res => {this.pushData(res)});
  }

  // htmlに渡すnewtodosにデータをpushする
  pushData(data: Todo): void {
    this.newtodos.unshift(data);
  }

  // 削除ボタンを押した時の挙動
  delete(id): void {
    this.todoService
      .delete(id);
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
