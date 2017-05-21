import { environment } from '../environments/environment';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as layoutReducer from './layout/layout.reducer';

export interface State {
    layout: layoutReducer.NavigationState
}

const reducers = {
    layout: layoutReducer.reducer
};

const developmentReducer : ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer : ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}