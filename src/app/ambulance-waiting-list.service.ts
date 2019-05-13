import { Injectable } from '@angular/core';
import { WaitingListEntry } from './store/waiting-list-entry/waiting-list-entry.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmbulanceWaitingListService {

  private readonly MINUTE = 60 * 1000;

  private mockupList: WaitingListEntry[] = [
    {
      id: '1',
      name: 'Jožko Púčik',
      patientId: '100.01',
      since: new Date(Date.now() - 10 * this.MINUTE),
      estimated: new Date(Date.now() + 65 * this.MINUTE),
      estimatedDurationMinutes: 15,
      condition: 'Kontrola'
    },
    {
      id: '2',
      name: 'Bc. August Cézar',
      patientId: '100.96',
      since: new Date(Date.now() - 30 * this.MINUTE),
      estimated: new Date(Date.now() + 30 * this.MINUTE),
      estimatedDurationMinutes: 20,
      condition: 'Teploty'
    },
    {
      id: '3',
      name: 'Ing. Ferdinand Trety',
      patientId: '100.28',
      since: new Date(Date.now() - 72 * this.MINUTE),
      estimated: new Date(Date.now() + 5 * this.MINUTE),
      estimatedDurationMinutes: 15,
      condition: 'Bolesti hrdla'
    }
  ];

  constructor() { }

  public getAllWaitingEntries(ambulanceId: string): Observable<WaitingListEntry[]> {
    return of(this.mockupList).pipe(delay(750));
  }

  public upsertEntry(ambulanceId: string, entry: WaitingListEntry): Observable<WaitingListEntry> {
    entry = Object.assign({}, entry);

    if (!entry.id) {
      entry.id = `${this.mockupList.length + 1}`;
      this.mockupList.push(entry);
    } else {
      this.mockupList = this.mockupList.map(
        element => ( element.id !== entry.id ) ? element : entry
      );
    }

    return of(entry).pipe(delay(250));
  }

  public deleteEntry(ambulanceId: string, entryId: string): Observable<boolean> {
    const exists = this.mockupList.findIndex(
      element => element.id === entryId
    ) >= 0;

    this.mockupList = this.mockupList.filter(
      element => (element.id !== entryId)
    );

    return of(exists).pipe(delay(300));
  }

  public getWaitingReasons(ambulanceId: string): Observable<Array<{
    reasonCode: string,
    display: string,
    estimatedVisitMinutes: number
  }>> {
    return of([
      { reasonCode: 'folowup', display: 'Kontrola', estimatedVisitMinutes: 15 },
      { reasonCode: 'nausea', display: 'Nevoľnosť', estimatedVisitMinutes: 45 },
      { reasonCode: 'fever', display: 'Teploty', estimatedVisitMinutes: 20 },
      { reasonCode: 'ache-in-throat', display: 'Bolesti hrdla', estimatedVisitMinutes: 20 },
    ])
    .pipe(delay(200));
  }
}
