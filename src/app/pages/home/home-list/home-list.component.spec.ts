import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListComponent } from './home-list.component';
import {SharedModule} from '../../../shared/shared.module';

describe('HomeListComponent', () => {
  let component: HomeListComponent;
  let fixture: ComponentFixture<HomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeListComponent ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
