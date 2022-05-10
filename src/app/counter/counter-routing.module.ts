import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TodoComponent } from '../todo/todo.component';
import { CounterComponent } from './counter.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/counter', pathMatch: 'full' },
    { path: 'counter', component: CounterComponent, data: { title: marker('Home') } },
    { path: 'todo', component: TodoComponent },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CounterRoutingModule { }
