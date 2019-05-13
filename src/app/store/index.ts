import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {
  routerReducer,
  SerializedRouterStateSnapshot,
  RouterReducerState
} from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import * as fromWaitingListEntry from './waiting-list-entry/waiting-list-entry.reducer';

export interface State {
  router: RouterReducerState<SerializedRouterStateSnapshot>;
  waitingListEntry: fromWaitingListEntry.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  waitingListEntry: fromWaitingListEntry.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectWaitingList = (state: State) => state.waitingListEntry;
