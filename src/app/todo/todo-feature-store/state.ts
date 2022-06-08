import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Todo } from "../todo.model";

export interface State extends EntityState<Todo> {
    lastUpdate: string;
    loading: boolean;
    error: string;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const defaultTodos = {
    lastUpdate: new Date().toString(),
    loading: false,
    error: null
}

export const initialState: State = todoAdapter.getInitialState(defaultTodos);