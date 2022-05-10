import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from './counter.actions';
import { CounterState } from './counter.reducer';
import { getCount } from './counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public count$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.count$ = store.select(getCount);
  }

  public ngOnInit(): void {
  }

  public reset(): void {
    this.store.dispatch(reset());
  }
}
