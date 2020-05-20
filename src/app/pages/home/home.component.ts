import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Character} from '../../models/character.model';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, take, tap} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {CharacterState} from '../../store/reducers/characters.reducer';
import * as CharacterActions from '../../store/actions/characters.action';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formSearchGroup: FormGroup;
  charactersState$: Observable<CharacterState>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private charService: CharacterService,
    private store: Store<{ characters: CharacterState }>) {
    this.charactersState$ = this.store.pipe(select('characters'));
  }

  ngOnInit(): void {
    this.formSearchGroup = this.fb.group({
      search: ''
    });

    this.store.dispatch(CharacterActions.ListAllCharacters());

    this.observeSearchInput();
  }

  observeSearchInput() {
    this.formSearchGroup.controls.search.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(700),
        tap((v) => {
          this.charService.params.setSearchName(v);
        }),
        tap(() => this.store.dispatch(CharacterActions.ListAllCharacters()))
      ).subscribe();
  }

  onClickCharacter(character: Character): void {
    this.router.navigate([`/personagem/${character.id}`]);
  }
}
