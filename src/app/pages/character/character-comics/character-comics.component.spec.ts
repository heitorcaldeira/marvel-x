import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComicsComponent } from './character-comics.component';
import {SharedModule} from '../../../shared/shared.module';

describe('CharacterComicsComponent', () => {
  let component: CharacterComicsComponent;
  let fixture: ComponentFixture<CharacterComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterComicsComponent ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
