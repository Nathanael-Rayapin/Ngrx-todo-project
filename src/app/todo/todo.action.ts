import { Action } from "@ngrx/store";
import { Todo } from "./toto.model";

export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    UPDATE_TODO = 'UPDATE_TODO',
    DELETE_TODO = 'DELETE_TODO',
    DELETE_ALL_TODO = 'DELETE_ALL_TODO'
}

// Add Todo
export class AddTodo implements Action {
    readonly type = TodoActionTypes.ADD_TODO;

    constructor(public payload: Todo) { }
}

// Update Todo
export class UpdateTodo implements Action {
    readonly type = TodoActionTypes.UPDATE_TODO;

    constructor(public payload: Todo) { }
}

// Delete Todo
export class DeleteTodo implements Action {
    readonly type = TodoActionTypes.DELETE_TODO;

    constructor(public payload: number) { }
}

// Delete All Todo
export class DeleteAllTodo implements Action {
    readonly type = TodoActionTypes.DELETE_ALL_TODO;
}

export type TodoActions =
    | AddTodo
    | UpdateTodo
    | DeleteTodo
    | DeleteAllTodo