import * as layout from './layout.actions';

export interface NavigationState {
    showSidenav: boolean;
}

const initialState: NavigationState = {
    showSidenav: false
};

export function reducer(state = initialState, action: layout.Actions) : NavigationState {
    switch (action.type) {
        case layout.OPEN_SIDENAV:
            return {
                showSidenav: true
            };
        case layout.CLOSE_SIDENAV:
            return {
                showSidenav: false
            };
        default:
            return state;
    }
}
