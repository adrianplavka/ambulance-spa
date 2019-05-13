import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatExpansionModule, MatFormFieldModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WaitingEntryComponent } from './waiting-entry.component';

describe('WaitingEntryComponent', () => {
  let component: WaitingEntryComponent;
  let fixture: ComponentFixture<WaitingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingEntryComponent ],
      imports: [
        BrowserAnimationsModule, MatInputModule, MatExpansionModule, MatFormFieldModule, MatButtonModule, MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingEntryComponent);
    component = fixture.componentInstance;
    component.data = {
      id: '42',
      patientId: '78987',
      name: 'Test Kralovic',
      since: new Date(2018, 12, 25, 10, 32),
      estimated: new Date(2018, 12, 25, 11, 15),
      estimatedDurationMinutes: 13,
      condition: 'Testovanie'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
