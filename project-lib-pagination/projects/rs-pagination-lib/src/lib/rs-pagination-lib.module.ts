import { NgModule } from '@angular/core';
import { RsPaginationLibComponent } from './rs-pagination-lib.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RsPaginationLibComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RsPaginationLibComponent]
})
export class RsPaginationLibModule { }
