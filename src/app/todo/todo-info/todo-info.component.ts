import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../toto.model';
import { TodoService } from '../toto.service';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html'
})
export class TodoInfoComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.todosChanged$;
  }

  deleteAllTodos(): void {
    this.todoService.deleteAll();
  }

}
