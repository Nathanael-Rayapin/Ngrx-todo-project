import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
// Ngrx Store
import * as fromTodoReducers from '../todo-feature-store/state';
import * as fromTodoActions from '../todo-feature-store/action';
import * as fromTodoSelectors from '../todo-feature-store/selectors';


@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html'
})
export class TodoInfoComponent {
  count$: Observable<number>;
  lastUpdate$: Observable<string>;

  constructor(
    private todoService: TodoService,
    private store: Store<{ todo: fromTodoReducers.State }>
  ) {
    this.count$ = store.pipe(select(fromTodoSelectors.selectTotalLength));
    this.lastUpdate$ = store.pipe(select(fromTodoSelectors.selectLastUpdate));
  }

  deleteAllTodos(): void {
    this.store.dispatch(new fromTodoActions.DeleteAllTodo());
  }

}
