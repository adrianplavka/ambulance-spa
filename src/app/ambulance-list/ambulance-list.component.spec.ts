import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AmbulanceListComponent } from './ambulance-list.component';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import { Component, Input } from '@angular/core';
import { WaitingListEntry } from '../store/waiting-list-entry/waiting-list-entry.model';
import { State } from '../store';
import { Store } from '@ngrx/store';
import { empty } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

@Component({ selector: 'app-waiting-entry', template: ''})
class WaitingEntryStubComponent {
  @Input()
  data: WaitingListEntry[] = [];
}

const storeStub: Partial<Store<State>> = {
  pipe: () => empty()
};

describe('AmbulanceListComponent', () => {
  let component: AmbulanceListComponent;
  let fixture: ComponentFixture<AmbulanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatExpansionModule, MatIconModule, RouterTestingModule],
      declarations: [ AmbulanceListComponent, WaitingEntryStubComponent ],
      providers: [ { provide: Store, useValue: storeStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
