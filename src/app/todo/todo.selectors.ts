import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./todo.reducer";
import { Todo } from "./toto.model";

// Call the Store we want use
export const getTodoState = createFeatureSelector<State>('todo');

// Get the State of the Store we want use
export const selectAll = createSelector(getTodoState, (state: State): Todo[] => state.todos);

// Get the total length of the State
export const selectTotalLength = createSelector(getTodoState, (state: State): number => state.todos.length);

// Get the last Update of the State
export const selectLastUpdate = createSelector(getTodoState, (state: State): string => state.lastUpdate);