import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromTodoReducers from './todo/todo.reducer';
import * as fromTodoActions from './todo/todo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-todo-project';

  constructor(private store: Store<fromTodoReducers.State>) {
    this.store.dispatch(new fromTodoActions.GetTodos())
  }
}
