import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from '../models/models';


@Injectable()
export class TodoService {
  todo: Todo[] = [];
  private Url = `http://127.0.0.1:8000/api/todo/`
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ){}

  // 全てのtodoをGETする
  getAllTodo(): Promise<Todo[]> {
    return this.http
      .get(this.Url)
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError)
  }

  // 追加時の挙動
  create(todo: Todo): Promise<Todo> {
    return this.http
      .post(this.Url, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
　}

  // 追加された最新のtodoを一件取得する
  getNewTodo(): Promise<Todo> {
    return this.http
      .get(this.Url+"?limit=1")
      .toPromise()
      .then(res => res.json().results)
      .catch(this.handleError)
  }

  // 更新時の挙動
  update(todo: Todo): Promise<Todo> {
    const url = `${this.Url}${todo.id}/`;
    return this.http
      .put(url, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  // 削除時の挙動
  delete(id: number): Promise<void> {
    const url = `${this.Url}${id}/`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  // エラーハンドリング
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
