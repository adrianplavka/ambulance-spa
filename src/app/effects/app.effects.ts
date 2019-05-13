import { Injectable } from '@angular/core';
import { Actions, Effect, ROOT_EFFECTS_INIT, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  LoadWaitingListEntrys,
  WaitingListEntryActionTypes,
  UpsertWaitingListEntry,
  UploadWaitingListEntry,
  DeleteWaitingListEntry
} from '../store/waiting-list-entry/waiting-list-entry.actions';
import { map, mergeMap } from 'rxjs/operators';
import { AmbulanceWaitingListService } from '../ambulance-waiting-list.service';

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private waitingListService: AmbulanceWaitingListService
  ) {}

  @Effect()
  init$: Observable<Action> = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    mergeMap(_ => this.waitingListService.getAllWaitingEntries('ambulance')),
    map(waitingListEntrys => new LoadWaitingListEntrys({ waitingListEntrys }))
  );

  @Effect()
  upsert$: Observable<Action> = this.actions$.pipe(
      ofType(WaitingListEntryActionTypes.UploadWaitingListEntry),
      mergeMap((action: UploadWaitingListEntry) => this.waitingListService.upsertEntry('ambulance', action.payload.waitingListEntry)),
      map(waitingListEntry => new UpsertWaitingListEntry({ waitingListEntry }))
  );

  @Effect({ dispatch: false })
  delete$: Observable<boolean> = this.actions$.pipe(
    ofType(WaitingListEntryActionTypes.DeleteWaitingListEntry),
    mergeMap((action: DeleteWaitingListEntry) => this.waitingListService.deleteEntry('ambulance', action.payload.id))
  );
}
