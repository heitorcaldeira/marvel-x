import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '../../../models/character.model';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeListComponent implements OnInit {

  @Output() clickCharacter: EventEmitter<Character> = new EventEmitter<Character>();
  @Input() characters: Character[] = [];

  ngOnInit(): void {
  }

  openCharacter(character: Character): void {
    this.clickCharacter.emit(character);
  }
}
