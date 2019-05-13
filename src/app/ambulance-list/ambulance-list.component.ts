import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State, selectWaitingList } from '../store';
import { WaitingListEntry } from '../store/waiting-list-entry/waiting-list-entry.model';
import { DeleteWaitingListEntry } from '../store/waiting-list-entry/waiting-list-entry.actions';
import * as fromWaitingList from '../store/waiting-list-entry/waiting-list-entry.reducer';

@Component({
  selector: 'app-ambulance-list',
  templateUrl: './ambulance-list.component.html',
  styleUrls: ['./ambulance-list.component.css']
})
export class AmbulanceListComponent {

  public readonly waitingList: Observable<WaitingListEntry[]>;

  constructor(private store: Store<State>) {
    this.waitingList = this.store.pipe(
      select(selectWaitingList),
      select(fromWaitingList.adapter.getSelectors().selectAll)
    );
  }

  public onDelete(entry: WaitingListEntry) {
    this.store.dispatch(new DeleteWaitingListEntry({ id: entry.id }));
  }
}
