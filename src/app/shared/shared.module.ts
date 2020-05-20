import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {TruncatePipe} from './truncate/truncate.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const matModules = [
  CommonModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    TruncatePipe,
  ],
  imports: [
    matModules
  ],
  exports: [
    matModules,
    TruncatePipe
  ]
})
export class SharedModule {
}
