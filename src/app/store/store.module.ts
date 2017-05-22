import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppActions, AppReducers } from './reducers';

@NgModule({
  imports:  [
    StoreModule.provideStore(AppReducers)
  ],
  declarations: [],
  exports: [],
  providers: [
    ...AppActions
  ]
})
export class CoreStoreModule {

}
