import { Todo } from "./toto.model";
import { TodoActions, TodoActionTypes } from "./todo.action";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

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

const initialState: State = todoAdapter.getInitialState(defaultTodos);

export function todoReducer(state = initialState, action: TodoActions): State {
    switch (action.type) {
        // Get Todos
        case TodoActionTypes.GET_TODOS:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: true,
                error: null
            };
        // Get Todos Success
        case TodoActionTypes.GET_TODOS_SUCCESS:
            return todoAdapter.setAll(action.payload, { ...state, lastUpdate: new Date().toString(), loading: false, error: null });
        // Get Todos Error
        case TodoActionTypes.GET_TODOS_ERROR:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: action.payload
            };
        // Add Todo
        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: true,
                error: null
            };
        // Add Todo Success
        case TodoActionTypes.ADD_TODO_SUCCESS:
            return todoAdapter.addOne(action.payload,
                {
                    ...state,
                    lastUpdate: new Date().toString(),
                    loading: false,
                    error: null
                });
        // Add Todo Error
        case TodoActionTypes.ADD_TODO_ERROR:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: action.payload
            };
        // Update Todo
        case TodoActionTypes.UPDATE_TODO:
            return todoAdapter.updateOne(action.payload,
                {
                    ...state,
                    lastUpdate: new Date().toString(),
                    loading: false,
                    error: null
                });
        // Delete Todo
        case TodoActionTypes.DELETE_TODO:
            return todoAdapter.removeOne(action.payload,
                {
                    ...state,
                    lastUpdate: new Date().toString(),
                    loading: false,
                    error: null
                });
        // Delete All Todo
        case TodoActionTypes.DELETE_ALL_TODO:
            return todoAdapter.removeAll(
                {
                    ...state,
                    lastUpdate: new Date().toString(),
                    loading: false,
                    error: null
                });

        default:
            return state;
    }
}