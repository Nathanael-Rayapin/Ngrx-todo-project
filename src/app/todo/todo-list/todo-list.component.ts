import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';
// Ngrx Store
import { TodoFeatureStoreActions } from '../todo-feature-store';
import { TodoFeatureStoreSelectors } from '../todo-feature-store';
import { TodoFeatureStoreState } from '../todo-feature-store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todo$: Observable<Todo[]>;
  count$: Observable<number>;

  isEdit = false;
  name: string;
  selectedTodo: Todo;

  constructor(
    private store: Store<{ todo: TodoFeatureStoreState.State }>
  ) {
    this.todo$ = store.pipe(select(TodoFeatureStoreSelectors.selectAll));
    this.count$ = store.pipe(select(TodoFeatureStoreSelectors.selectTotalLength));
  }

  // Add Todo
  addTodo(name: string): void {
    const todo: Todo = new Todo(name);
    this.store.dispatch(new TodoFeatureStoreActions.AddTodo(todo));
    this.name = '';
  }

  // Update Todo
  updateTodo(todo: Todo): void {
    this.isEdit = true;
    this.name = todo.name;
    this.selectedTodo = todo;
  }

  confirmTodo(name: string): void {
    this.selectedTodo = { ...this.selectedTodo, name };
    this.store.dispatch(new TodoFeatureStoreActions.UpdateTodo({ id: this.selectedTodo.id, changes: this.selectedTodo }));
    this.isEdit = false;
    this.name = '';
  }

  // Delete Todo
  deleteTodo(todo: Todo): void {
    this.store.dispatch(new TodoFeatureStoreActions.DeleteTodo(todo.id));
  }
}