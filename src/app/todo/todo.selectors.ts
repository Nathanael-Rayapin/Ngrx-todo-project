import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntitySelectors, EntityState } from "@ngrx/entity/src/models";
import { State, todoAdapter } from "./todo.reducer";
import { Todo } from "./toto.model";

// Call the Store we want use
export const getTodoState = createFeatureSelector<State>('todo');

// Create the Entity
export const {
    selectAll: selectAllTodo,
    selectTotal: count
}: EntitySelectors<Todo, EntityState<Todo>> = todoAdapter.getSelectors();

export const selectAll = createSelector(getTodoState, selectAllTodo);
export const selectTotalLength = createSelector(getTodoState, count);
export const selectLastUpdate = createSelector(getTodoState, (state: State): string => state.lastUpdate);

export const selectLoading = createSelector(getTodoState, (state: State): boolean => state.loading);
export const selectError = createSelector(getTodoState, (state: State): string => state.error);