import { Todo } from "./toto.model";
import { TodoActions, TodoActionTypes } from "./todo.action";

export interface State {
    todos: Todo[];
    lastUpdate: string;
}

const initialState: State = {
    todos: [new Todo('Learn Java', 1), new Todo('Learn Angular', 2), new Todo('Learn NgRx', 3)],
    lastUpdate: new Date().toString(),
};

export function todoReducer(state = initialState, action: TodoActions): State {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                todos: [...state.todos, action.payload],
            };
        case TodoActionTypes.UPDATE_TODO:
            const todos = state.todos.map((t: Todo) => {
                if (t.id === action.payload.id) {
                    t = { ...t, ...action.payload };
                }
                return t;
            });
            return {
                ...state,
                todos,
                lastUpdate: new Date().toString(),
            };
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                todos: [...state.todos].filter((t: Todo) => t.id !== action.payload),
            };
        case TodoActionTypes.DELETE_ALL_TODO:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                todos: [],
            };
        default:
            return state;
    }
}