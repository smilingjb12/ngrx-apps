import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoStatsComponent } from './todo-stats.component';

describe('TodoStatsComponent', () => {
  let component: TodoStatsComponent;
  let fixture: ComponentFixture<TodoStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
