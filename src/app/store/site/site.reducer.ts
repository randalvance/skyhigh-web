import { Action } from '@ngrx/store';
import { SiteActions } from './site.actions';

export interface SiteState {
  siteName: string
}

const initialState: SiteState = {
  siteName: 'My Awesome Site'
};

export function siteReducer(state = initialState, action: Action): SiteState {
  switch (action.type) {
    default:
      return state;
  }
}
