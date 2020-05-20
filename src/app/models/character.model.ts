import {Image} from './image.model';
import {Collection} from './collection.model';

export class Character {
  public id: number;
  public name: string;
  public description: string;
  public thumbnail: Image;
  public series: Collection;
  public comics: Collection;

  constructor(
    data: any
  ) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.thumbnail = data.thumbnail;
    this.series = data.series;
    this.comics = data.comics;
  }
}
