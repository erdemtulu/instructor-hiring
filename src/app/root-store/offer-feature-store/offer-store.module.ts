import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { OfferStoreEffects } from './effects';
import { offerReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('offers', offerReducer),
    EffectsModule.forFeature([OfferStoreEffects])
  ]
})
export class OfferStoreModule { }
