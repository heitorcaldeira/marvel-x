import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkeletonComponent } from './home-skeleton.component';
import {SharedModule} from '../../../shared/shared.module';

describe('HomeSkeletonComponent', () => {
  let component: HomeSkeletonComponent;
  let fixture: ComponentFixture<HomeSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ HomeSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
