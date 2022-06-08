import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntitySelectors, EntityState } from "@ngrx/entity/src/models";
import { State, todoAdapter } from "./state";
import { Todo } from "../todo.model";

// 1 - Call the Store we want use
export const getTodoState = createFeatureSelector<State>('todo');

// 2 - Create the Entity and retrieve the todo lists and length (Method are given here)
export const {selectAll: selectAllTodo, selectTotal: count }: EntitySelectors<Todo, EntityState<Todo>> = todoAdapter.getSelectors();

// 3 - Create Other Selectors
export const lastUpdate = (state: State) => state.lastUpdate;
export const loading = (state: State) => state.loading;
export const error = (state: State) => state.error;

// 4 - Export Selectors
export const selectAll = createSelector(getTodoState, selectAllTodo);
export const selectTotalLength = createSelector(getTodoState, count);
export const selectLastUpdate = createSelector(getTodoState, lastUpdate);

export const selectLoading = createSelector(getTodoState, loading);
export const selectError = createSelector(getTodoState, error);