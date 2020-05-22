import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {ActivatedRoute} from '@angular/router';
import {HomeModule} from './home.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CharactersEffects} from '../../store/effects/characters.effects';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let actions$: Observable<Action>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HomeModule,
        RouterTestingModule,
        HttpClientTestingModule,
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
            paramMap: {
              get: () => 1
            }
          }
        }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
