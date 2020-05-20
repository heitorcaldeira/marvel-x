import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './pages/home/home.module';
import {CharacterModule} from './pages/character/character.module';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CharacterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

