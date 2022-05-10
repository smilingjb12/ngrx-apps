import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem } from './todo.actions';
import { TodoState } from './todo.reducer';
import { isLoadingTodos } from './todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public newTodo: string = '';
  public loadingItems$: Observable<boolean>;

  constructor(private store: Store<TodoState>) {
    this.loadingItems$ = this.store.select(isLoadingTodos);
  }

  public ngOnInit(): void {
  }

  public onEnterPressed(): void {
    this.store.dispatch(addItem({ text: this.newTodo }));
    this.newTodo = '';
  }
}
