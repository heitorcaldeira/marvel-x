import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Character} from '../../../models/character.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrls: ['./home-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBarComponent implements OnInit {

  @Input() filteredOptions: Character[] = [];
  @Input() formGroup: FormGroup;
  @Output() searchChanges: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onSearchChange(event): void {
    this.searchChanges.emit(event.target.value);
  }

}
