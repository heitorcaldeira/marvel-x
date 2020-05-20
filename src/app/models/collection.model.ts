import {Summary} from './summary.model';

export interface Collection {
  available: number;
  returned: number;
  collectionURI: string;
  items: Summary[];
}
