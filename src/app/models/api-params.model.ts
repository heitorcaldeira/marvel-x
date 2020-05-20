import {HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Md5} from 'ts-md5';
import {pickBy} from 'lodash';

export class ApiParams {
  ts: number;
  apikey: string;
  hash: any;
  nameStartsWith: string;

  constructor() {
    this.setTs();
    this.setApikey();
    this.setHash();
  }

  getParams(): HttpParams {
    const params = {
      ts: this.getTs(),
      apikey: this.getApikey(),
      hash: this.getHash(),
      nameStartsWith: this.getSearchName(),
      limit: 40
    };

    return pickBy(params, (v) => v);
  }

  setTs() {
    this.ts = Math.ceil(Math.random() * 100);
  }

  getTs() {
    return this.ts;
  }

  setSearchName(name: string) {
    this.nameStartsWith = name;
  }

  getSearchName() {
    return this.nameStartsWith;
  }

  setApikey() {
    this.apikey = environment.publicApiKey;
  }

  getApikey() {
    return this.apikey;
  }

  setHash() {
    this.hash = new Md5().appendStr(`${this.ts}${environment.privateApiKey}${this.getApikey()}`).end();
  }

  getHash() {
    return this.hash;
  }
}
