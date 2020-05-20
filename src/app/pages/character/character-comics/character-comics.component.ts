import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Collection} from '../../../models/collection.model';

@Component({
  selector: 'app-character-comics',
  templateUrl: './character-comics.component.html',
  styleUrls: ['./character-comics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComicsComponent implements OnInit {

  @Input() comics: Collection;

  ngOnInit(): void {
  }
}
