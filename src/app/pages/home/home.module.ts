import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {HomeListComponent} from './home-list/home-list.component';
import {HomeBarComponent} from './home-bar/home-bar.component';
import {CoreModule} from '../../core/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeSkeletonComponent} from './home-skeleton/home-skeleton.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBarComponent,
    HomeListComponent,
    HomeSkeletonComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class HomeModule {
}
