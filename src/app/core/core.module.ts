import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

const components = [
  HeaderComponent,
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    components
  ]
})
export class CoreModule {
}
