export class Todo {
  id: number;
  title: string;
  description: string;
}

export class NewTodo {
  count: number;
  next: any;
  previous: any;
  results: Todo[]
}
