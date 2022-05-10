import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../counter.actions';
import { CounterState } from '../counter.reducer';

@Component({
  selector: 'app-increment-button',
  templateUrl: './increment-button.component.html',
  styleUrls: ['./increment-button.component.scss']
})
export class IncrementButtonComponent implements OnInit {
  @Input() public by: number = 0;
  @Input() public label: string = '';

  constructor(private store: Store<CounterState>) { }

  public ngOnInit(): void {
  }

  public increment(): void {
    this.store.dispatch(increment({ by: this.by }));
  }
}
