import {Character} from '../../models/character.model';
import {Action, createReducer, on} from '@ngrx/store';
import * as CharacterActions from '../actions/characters.action';

export interface CharacterState {
  data: Character[];
  selected: Character;
  loading: boolean;
}

export const initialState: CharacterState = {
  data: [],
  selected: null,
  loading: false,
};

const characterReducer = createReducer(
  initialState,
  on(CharacterActions.ListAllCharacters, state => ({...state, loading: true})),
  on(CharacterActions.ListAllCharactersSuccess, (state, {payload}) => ({...state, data: payload, loading: false})),
  on(CharacterActions.ListFilteredCharacter, state => ({...state, loading: true})),
  on(CharacterActions.ListFilteredCharacterSuccess, (state, {payload}) => ({...state, selected: payload, loading: false})),
);


export function reducer(state: CharacterState, action: Action) {
  return characterReducer(state, action);
}
