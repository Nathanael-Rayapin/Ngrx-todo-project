import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { todoReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ todo: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: []
})
export class TodoFeatureStoreModule { }