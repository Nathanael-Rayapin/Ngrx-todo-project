import { Update } from "@ngrx/entity";
import { Action } from "@ngrx/store";
import { Todo } from "../todo.model";

export enum TodoActionTypes {
    GET_TODOS = 'GET_TODOS',
    GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
    GET_TODOS_ERROR = 'GET_TODOS_ERROR',

    ADD_TODO = 'ADD_TODO',
    ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
    ADD_TODO_ERROR = 'ADD_TODO_ERROR',

    DELETE_TODO = 'DELETE_TODO',
    DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
    DELETE_TODO_ERROR = 'DELETE_TODO_ERROR',

    UPDATE_TODO = 'UPDATE_TODO',
    DELETE_ALL_TODO = 'DELETE_ALL_TODO'
}

// Get Todos
export class GetTodos implements Action {
    readonly type = TodoActionTypes.GET_TODOS;
}

// Get Todos Success
export class GetTodosSucess implements Action {
    readonly type = TodoActionTypes.GET_TODOS_SUCCESS;

    constructor(public payload: Todo[]) { }
}

// Get Todos Error
export class GetTodosError implements Action {
    readonly type = TodoActionTypes.GET_TODOS_ERROR;

    constructor(public payload: string) { }
}

// Add Todo
export class AddTodo implements Action {
    readonly type = TodoActionTypes.ADD_TODO;

    constructor(public payload: Todo) { }
}

// Add Todo Success
export class AddTodoSuccess implements Action {
    readonly type = TodoActionTypes.ADD_TODO_SUCCESS;

    constructor(public payload: Todo) { }
}

// Add Todo Error
export class AddTodoError implements Action {
    readonly type = TodoActionTypes.ADD_TODO_ERROR;

    constructor(public payload: string) { }
}

// Delete Todo
export class DeleteTodo implements Action {
    readonly type = TodoActionTypes.DELETE_TODO;

    constructor(public payload: number) { }
}
// Delete Todo Success
export class DeleteTodoSuccess implements Action {
    readonly type = TodoActionTypes.DELETE_TODO_SUCCESS;

    constructor(public payload: number) { }
}
// Delete Todo Error
export class DeleteTodoError implements Action {
    readonly type = TodoActionTypes.DELETE_TODO_ERROR;

    constructor(public payload: string) { }
}

// Update Todo
export class UpdateTodo implements Action {
    readonly type = TodoActionTypes.UPDATE_TODO;

    constructor(public payload: Update<Todo>) { }
}

// Delete All Todo
export class DeleteAllTodo implements Action {
    readonly type = TodoActionTypes.DELETE_ALL_TODO;
}

export type TodoActions =
    | GetTodos
    | GetTodosSucess
    | GetTodosError
    | AddTodo
    | AddTodoSuccess
    | AddTodoError
    | DeleteTodo
    | DeleteTodoSuccess
    | DeleteTodoError
    | UpdateTodo
    | DeleteAllTodo