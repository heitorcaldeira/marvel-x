import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeBarComponent} from './home-bar.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-host-component',
  template: `<app-home-bar [formGroup]="formGroup"></app-home-bar>`
})
class TestHostComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.formGroup = this.fb.group({
      search: ''
    });
  }
}

describe('HomeBarComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBarComponent, TestHostComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
