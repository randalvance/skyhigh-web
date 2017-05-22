import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { LayoutState, LayoutActions, layoutReducer } from './layout';

export interface AppState {
    layout: LayoutState
}

// It is important that the key of reducer here matches the key of store in the AppState for each reducer
export const AppReducers = {
    layout: layoutReducer
};

export const AppActions = [
  LayoutActions
]

const developmentReducer : ActionReducer<AppState> = compose(storeFreeze, combineReducers)(AppReducers);
const productionReducer : ActionReducer<AppState> = combineReducers(AppReducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

// Place root state selectors here
/*
  export function getPlayerSearch$ (state$: Store<EchoesState>): Observable<PlayerSearch> {
    return state$.select(state => state.search);
  };

*/
