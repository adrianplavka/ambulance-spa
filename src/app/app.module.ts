import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatSliderModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { routes } from './app.routes';
import {AppComponent} from './app.component';
import {AmbulanceListComponent} from './ambulance-list/ambulance-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WaitingEntryComponent} from './waiting-entry/waiting-entry.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './effects/app.effects';
import {WaitingEntryEditorComponent} from './waiting-entry-editor/waiting-entry-editor.component';

@NgModule({
  declarations: [
    AppComponent, AmbulanceListComponent, WaitingEntryComponent, WaitingEntryEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot(routes, { enableTracing: true }),
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSliderModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
