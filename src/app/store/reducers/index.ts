import * as fromCharacters from './characters.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  characters: fromCharacters.CharacterState;
}

export const reducers: ActionReducerMap<AppState> = {
  characters: fromCharacters.reducer
};
