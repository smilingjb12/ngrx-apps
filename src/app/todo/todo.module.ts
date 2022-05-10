import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoStatsComponent } from './todo-stats/todo-stats.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ],
  declarations: [TodoComponent, TodoListComponent, TodoStatsComponent],
})
export class TodoModule { }
