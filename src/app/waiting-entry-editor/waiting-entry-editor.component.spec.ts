import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingEntryEditorComponent } from './waiting-entry-editor.component';
import { MatCardModule, MatButtonModule, MatSliderModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { State } from '../store';
import { Store } from '@ngrx/store';
import { empty } from 'rxjs';

const storeStub: Partial<Store<State>> = {
  pipe: () => empty()
};

describe('WaitingEntryEditorComponent', () => {
  let component: WaitingEntryEditorComponent;
  let fixture: ComponentFixture<WaitingEntryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, MatCardModule, MatButtonModule, MatSliderModule, MatFormFieldModule, MatSelectModule],
      declarations: [ WaitingEntryEditorComponent ],
      providers: [ {provide: Store, useValue: storeStub} ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingEntryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
