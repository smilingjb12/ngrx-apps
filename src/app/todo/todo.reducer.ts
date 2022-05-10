import { createReducer, on } from "@ngrx/store";
import { produce } from 'immer';
import { addItem, fetchTodos, fetchTodosSuccess, removeItem, toggleDone } from "./todo.actions";

export interface TodoItem {
  id: number;
  text: string;
  isDone: boolean;
}

export interface TodoState {
  items: TodoItem[];
  loadingItems: boolean;
}

export const todoReducer = createReducer<TodoState>(
  { items: [], loadingItems: false },
  on(addItem, (state, action) => produce(state, draft => {
    draft.items.push({
      id: state.items.length + 1,
      isDone: false,
      text: action.text
    });
  })),
  on(toggleDone, (state, action) => produce(state, draft => {
    const item = draft.items.find(i => i.id === action.id)!;
    item.isDone = !item.isDone;
  })),
  on(removeItem, (state, action) => produce(state, draft => {
    draft.items = draft.items.filter(i => i.id !== action.id);
  })),
  on(fetchTodos, (state, action) => produce(state, draft => {
    draft.loadingItems = true;
  })),
  on(fetchTodosSuccess, (state, action) => produce(state, draft => {
    draft.items = action.todos;
    draft.loadingItems = false;
  }))
);
