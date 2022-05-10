import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { TodoComponent } from '../todo/todo.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'todo', component: TodoComponent },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TodoRoutingModule { }
