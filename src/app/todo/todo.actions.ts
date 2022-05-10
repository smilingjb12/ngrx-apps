import { createAction, props } from "@ngrx/store";
import { TodoItem } from "./todo.reducer";

export enum TodoActions {
  AddItem = 'Add item',
  RemoveItem = 'Remove item',
  ToggleDone = 'Toggle done',
  FetchTodos = 'Fetch todos',
  FetchTodosSuccess = 'Fetch todos success',
  FetchTodosFailure = 'Fetch todos failure'
}

export const addItem = createAction(
  TodoActions.AddItem,
  props<{ text: string; }>());

export const removeItem = createAction(
  TodoActions.RemoveItem,
  props<{ id: number; }>()
);

export const toggleDone = createAction(
  TodoActions.ToggleDone,
  props<{ id: number; }>()
);

export const fetchTodos = createAction(
  TodoActions.FetchTodos
);

export const fetchTodosSuccess = createAction(
  TodoActions.FetchTodosSuccess,
  props<{ todos: TodoItem[] }>()
);

export const fetchTodosFailure = createAction(
  TodoActions.FetchTodosFailure
);


