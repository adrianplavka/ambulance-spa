import { Component, Input, Output, EventEmitter } from '@angular/core';

import { WaitingListEntry } from '../store/waiting-list-entry/waiting-list-entry.model';

@Component({
  selector: 'app-waiting-entry',
  templateUrl: './waiting-entry.component.html',
  styleUrls: ['./waiting-entry.component.css']
})
export class WaitingEntryComponent {

  @Input()
  public data: WaitingListEntry;

  @Output()
  public delete = new EventEmitter<WaitingListEntry>();
}
