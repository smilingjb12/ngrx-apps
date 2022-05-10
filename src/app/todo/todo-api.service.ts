import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { TodoItem } from './todo.reducer';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor() { }

  public getTodos(): Observable<TodoItem[]> {
    return of([
      {
        id: 1,
        text: 'Buy a car',
        isDone: true
      },
      {
        id: 2,
        text: 'Pay bills',
        isDone: false
      }
    ]).pipe(delay(1200));
  }
}
