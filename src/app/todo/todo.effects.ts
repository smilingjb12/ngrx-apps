import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoApiService } from "./todo-api.service";
import { fetchTodosFailure, fetchTodosSuccess, TodoActions } from "./todo.actions";
import { TodoItem } from "./todo.reducer";

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoApiService: TodoApiService
  ) {
  }

  public fetchTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.FetchTodos),
    mergeMap(() => this.todoApiService.getTodos().pipe(
      map((todos: TodoItem[]) => fetchTodosSuccess({ todos })),
      catchError(() => of(fetchTodosFailure()))
    )))
  );
}