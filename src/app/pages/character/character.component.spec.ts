import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterComponent} from './character.component';
import {CharacterModule} from './character.module';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {CharactersEffects} from '../../store/effects/characters.effects';
import {provideMockStore} from '@ngrx/store/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let actions$: Observable<Action>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CharacterModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        CharactersEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          selectors: [
            {
              selector: 'characters',
              value: {},
            },
          ],
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
