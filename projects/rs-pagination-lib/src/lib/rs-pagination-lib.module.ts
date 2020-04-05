import { NgModule } from '@angular/core';
import { RsPaginationLibComponent } from './rs-pagination-lib.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**
 * Author : romdhanisamir94@gmail.com
 */
@NgModule({
  declarations: [RsPaginationLibComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RsPaginationLibComponent]
})
export class RsPaginationModule { }
