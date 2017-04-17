import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'todo',
  templateUrl: '../templates/todo.component.html',
  styleUrls: ['../static/todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo = new Todo();

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (isNaN(id)) { return; }
      this.todoService.getTodo(id)
        .then(todo => this.todo = todo);
    });
  }

  // 保存、更新ボタンが押された時にサービスのメソッドを呼びに行く
  // 完了したらgoBackメソッドを実行する
  save(): void {
    if (this.todo.id) {
      this.todoService.update(this.todo)
        .then(() => this.goBack());
    } else {
      this.todoService.create(this.todo)
        .then(() => this.goBack());
    }
  }

  // 削除ボタンを押した時にサービスのメソッドを呼びに行く
  // 完了したらgoBackメソッドを実行する
  delete(): void {
    if (this.todo.id) {
      this.todoService.delete(this.todo.id)
        .then(() => this.goBack());
    } else {
      this.goBack();
    }
  }

  // 戻るボタンが押された時と、作成/更新が発生した時のイベント
  goBack(): void {
    this.router.navigate(['']);
  }

}
