import { NgModule } from '@angular/core';
import { RsPaginationLibComponent } from './rs-pagination-lib.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RsPaginationComponent } from './v2/rs-pagination.component';
/**
 * Author : romdhanisamir94@gmail.com
 */
@NgModule({
  declarations: [
    RsPaginationLibComponent,
    RsPaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RsPaginationLibComponent,
    RsPaginationComponent
  ]
})
export class RsPaginationModule { }
