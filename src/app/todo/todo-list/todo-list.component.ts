import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchTodos, removeItem, toggleDone } from '../todo.actions';
import { TodoItem, TodoState } from '../todo.reducer';
import { getItems } from '../todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<TodoItem[]>;

  constructor(
    private store: Store<TodoState>
  ) {
    this.todos$ = this.store.select(getItems);
  }

  public ngOnInit(): void {
    this.store.dispatch(fetchTodos());
  }

  public removeItem(event: Event, todo: TodoItem): void {
    event.stopPropagation();
    this.store.dispatch(removeItem({ id: todo.id }));
  }

  public toggleDone(item: TodoItem): void {
    this.store.dispatch(toggleDone({ id: item.id }));
  }
}
