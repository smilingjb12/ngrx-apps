import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'player', component: PlayerComponent },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PlayerRoutingModule { }
