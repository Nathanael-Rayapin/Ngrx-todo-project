import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { TodoService } from "./toto.service";

import * as fromTodoActions from './todo.action';
import { Todo } from "./toto.model";
import { Injectable } from "@angular/core";
import { TodoActions } from "./todo.action";


@Injectable({ providedIn: 'root' })
export class TodoEffects {
    getTodos$: Observable<Action> = createEffect(() => {
        return this.action$.pipe(
            ofType(fromTodoActions.TodoActionTypes.GET_TODOS),
            switchMap(() => this.todoService.getAll().pipe(
                map((todos: Todo[]) => new fromTodoActions.GetTodosSucess(todos)),
                catchError((err: string) => of(new fromTodoActions.GetTodosError(err)))
            ))
        )
    })

    addTodo$: Observable<TodoActions> = createEffect(() => this.action$.pipe(
        ofType<fromTodoActions.AddTodo>(fromTodoActions.TodoActionTypes.ADD_TODO),
        switchMap(action => this.todoService.addTodo(action.payload).pipe(
            map(todo => {
                window.location.reload()
                return new fromTodoActions.AddTodoSuccess(todo)
            }),
            catchError((err: string) => of(new fromTodoActions.AddTodoError(err)))
        ))
    ))


    constructor(
        private action$: Actions,
        private todoService: TodoService) { }
}