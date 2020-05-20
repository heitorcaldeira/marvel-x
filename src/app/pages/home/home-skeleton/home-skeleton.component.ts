import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-skeleton',
  templateUrl: './home-skeleton.component.html',
  styleUrls: ['./home-skeleton.component.scss']
})
export class HomeSkeletonComponent implements OnInit {
  public qtd;

  @Input() set total(number) {
    this.qtd = Array(number).fill('');
  }

  ngOnInit(): void {
  }
}
