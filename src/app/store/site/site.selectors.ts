import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { createSelector } from 'reselect';
import { SiteState } from './site.reducer';
import { AppState } from '../reducers';

export const getSiteState = (state: AppState) => {
  return state.site;
}
export const getSiteName = createSelector(getSiteState, state => state.siteName);
