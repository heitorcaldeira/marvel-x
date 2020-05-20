import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Character} from '../../../models/character.model';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterInfoComponent implements OnInit {

  @Input() character: Character;

  ngOnInit(): void {
  }

}
