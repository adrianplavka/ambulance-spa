import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, selectWaitingList } from '../store';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { WaitingListEntry } from '../store/waiting-list-entry/waiting-list-entry.model';
import * as fromWaitingList from '../store/waiting-list-entry/waiting-list-entry.reducer';
import { UpsertWaitingListEntry, UploadWaitingListEntry } from '../store/waiting-list-entry/waiting-list-entry.actions';

@Component({
  selector: 'app-waiting-entry-editor',
  templateUrl: './waiting-entry-editor.component.html',
  styleUrls: ['./waiting-entry-editor.component.css']
})
export class WaitingEntryEditorComponent implements OnInit {

  private static newEntryPlaceholder: WaitingListEntry = {
    id: undefined,
    name: '',
    patientId: '',
    since: new Date(Date.now()),
    estimated: undefined,
    estimatedDurationMinutes: 20,
    condition: 'Nevoľnosť'
  };

  public readonly knownConditions$: Observable<Array<{ concept: string, display: string }>>;

  public data$: Observable<WaitingListEntry>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<State>,
    private readonly router: Router
  ) {
      this.knownConditions$ = of([
        { concept: 'followup', display: 'Kontrola' },
        { concept: 'nausea', display: 'Nevoľnosť' },
        { concept: 'fever', display: 'Teploty' },
        { concept: 'ache-in-throat', display: 'Bolesti hrdla' }
      ]);
  }

  ngOnInit() {
    this.data$ = this.route.paramMap.pipe(
      map(_ => _.get('id')),
      switchMap(
        id => (id === 'new')
        ? of(Object.assign({}, WaitingEntryEditorComponent.newEntryPlaceholder))
        : this.store.pipe(
          select(selectWaitingList),
          select(fromWaitingList.adapter.getSelectors().selectEntities),
          select(entities => entities[id])
        )
      )
    );
  }

  public onUpsertEntry(waitingListEntry: WaitingListEntry) {
    this.store.dispatch(new UploadWaitingListEntry({ waitingListEntry }));
    this.router.navigate(['/', 'waiting-list']);
  }
}
