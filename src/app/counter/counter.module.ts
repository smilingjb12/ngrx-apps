import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { IncrementButtonComponent } from './increment-button/increment-button.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CounterRoutingModule
  ],
  declarations: [CounterComponent, IncrementButtonComponent],
})
export class CounterModule { }
