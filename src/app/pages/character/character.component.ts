import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {CharacterState} from '../../store/reducers/characters.reducer';
import * as CharacterActions from '../../store/actions/characters.action';
import { Observable, of} from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {

  charactersState$: Observable<CharacterState>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{ characters: CharacterState }>
  ) {
    this.charactersState$ = this.store.pipe(select('characters'));
  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch(CharacterActions.ListFilteredCharacter({id}));
  }

  ngOnDestroy() {
    this.charactersState$ = of({
      data: [],
      selected: null,
      loading: false,
    });
  }
}
