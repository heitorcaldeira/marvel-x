import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Collection} from '../../../models/collection.model';

@Component({
  selector: 'app-character-series',
  templateUrl: './character-series.component.html',
  styleUrls: ['./character-series.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterSeriesComponent implements OnInit {

  @Input() series: Collection;

  ngOnInit(): void {
  }
}
