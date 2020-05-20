import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSeriesComponent } from './character-series.component';

describe('CharacterSeriesComponent', () => {
  let component: CharacterSeriesComponent;
  let fixture: ComponentFixture<CharacterSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
