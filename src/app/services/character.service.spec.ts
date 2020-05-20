import {TestBed} from '@angular/core/testing';
import {CharacterService} from './character.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';


describe('CharactersService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
