import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    PlayerRoutingModule
  ],
  declarations: [PlayerComponent],
})
export class PlayerModule { }
