import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoState } from '../todo.reducer';
import { getRemainingItems, getTotalItems } from '../todo.selectors';

@Component({
  selector: 'app-todo-stats',
  templateUrl: './todo-stats.component.html',
  styleUrls: ['./todo-stats.component.scss']
})
export class TodoStatsComponent implements OnInit {
  public totalItems$: Observable<number>;
  public remainingItems$: Observable<number>;

  constructor(private store: Store<TodoState>) {
    this.totalItems$ = store.select(getTotalItems);
    this.remainingItems$ = store.select(getRemainingItems);
  }

  ngOnInit(): void {
  }

}
