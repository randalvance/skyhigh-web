import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppActions, AppReducers } from './reducers';
import { environment } from '../../environments/environment';

const optionalImports = [];

if (!environment.production) {
  optionalImports.push(StoreDevtoolsModule.instrumentOnlyWithExtension());
}

@NgModule({
  imports:  [
    StoreModule.provideStore(AppReducers),
    RouterStoreModule.connectRouter(),
    ...optionalImports
  ],
  declarations: [],
  exports: [],
  providers: [
    ...AppActions
  ]
})
export class CoreStoreModule {

}
