import {createAction, props} from '@ngrx/store';
import {Character} from '../../models/character.model';

export const ListAllCharacters = createAction('[Characters] List All');
export const ListAllCharactersSuccess = createAction('[Characters] List All Success', props<{payload: Character[]}>());

export const ListFilteredCharacter = createAction('[Characters] List Filtered', props<{id: number}>());
export const ListFilteredCharacterSuccess = createAction('[Characters] List Filtered Success', props<{payload: Character}>());
