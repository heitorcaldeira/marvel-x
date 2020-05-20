import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiParams} from '../models/api-params.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  params: ApiParams = new ApiParams();

  constructor(private http: HttpClient) {
  }


  getCharacters() {
    const {...params} = {
      ...this.params.getParams()
    } as any;

    return this.http.get<any>(`${environment.baseURL}`, {params})
      .pipe(
        map(v => v.data.results)
      );
  }

  getCharacterById(id: number) {
    const {nameStartsWith, ...params} = {
      ...this.params.getParams()
    } as any;

    return this.http.get<any>(`${environment.baseURL}/${id}`, {params})
      .pipe(
        map(v => v.data.results.length ? v.data.results[0] : of({}))
      );
  }
}
