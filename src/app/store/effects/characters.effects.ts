import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Character} from '../../models/character.model';
import {CharacterService} from '../../services/character.service';
import * as CharacterActions from '../actions/characters.action';
import {exhaustMap, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class CharactersEffects {

  loadCharacters$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharacterActions.ListAllCharacters),
      exhaustMap(action =>
        this.characterService.getCharacters()
          .pipe(
            map((data: Character[]) => CharacterActions.ListAllCharactersSuccess({payload: data})),
          )
      ),
    );
  });

  loadCharacterById$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharacterActions.ListFilteredCharacter),
      exhaustMap(action =>
        this.characterService.getCharacterById(action.id)
          .pipe(
            map((data: Character) => CharacterActions.ListFilteredCharacterSuccess({payload: data})),
          )
      ),
    );
  });

  constructor(private characterService: CharacterService, private actions$: Actions) {
  }
}
