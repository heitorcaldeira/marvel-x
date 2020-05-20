import {NgModule} from '@angular/core';
import {CharacterComponent} from './character.component';
import {CharacterInfoComponent} from './character-info/character-info.component';
import {CharacterSeriesComponent} from './character-series/character-series.component';
import {CharacterComicsComponent} from './character-comics/character-comics.component';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterInfoComponent,
    CharacterSeriesComponent,
    CharacterComicsComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    RouterModule,
  ],
})
export class CharacterModule {
}

