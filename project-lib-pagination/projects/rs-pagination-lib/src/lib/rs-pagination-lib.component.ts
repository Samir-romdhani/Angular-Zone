import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rs-pagination-lib',
  template: `
  <div *ngIf="pagesNumber >= 1">
	<div class="row">
			<div class="col-md-5">
				<button class='btn btn-info btn-sm m-l-1em' (click)="firstPage()" [disabled]="page === 1"><i class="fa fa-angle-double-left"></i></button>
				<button class='btn btn-info btn-sm m-l-1em' (click)="previousPage()" [disabled]="page == 1"><i class="fa fa-angle-left"></i></button>
				<span style="margin-left: 10px;margin-right: 10px;">Page {{page}}/{{pagesNumber}}</span> 
				<span>  </span>
        <!--
        <span style="margin-left: 10px;margin-right: 10px;">Size</span>
				<select class="form-control form-control-sm pageSizeSelectBox" id="currentSize" name="currentSize" [(ngModel)]="currentSize" (change)="changeSize()">
					<option *ngFor="let size of sizes" value="{{size}}">{{size}}</option>
        </select>
        -->
				<button class='btn btn-info btn-sm m-l-1em' (click)="nextPage()" [disabled]="page === pagesNumber"><i class="fa fa-angle-right"></i></button>
				<button class='btn btn-info btn-sm m-l-1em' (click)="lastPage()" [disabled]="page === pagesNumber"><i class="fa fa-angle-double-right"></i></button>
			</div>
	</div>
</div>
  `,
  styles: [`
  .m-l-1em { 
    margin-left:1em; 
    width: 25px;
  }
  
  .pageSizeSelectBox {
    display: -webkit-inline-box;
    width: 11%;
    padding: 5px; 
  }
  
  `]
})
export class RsPaginationLibComponent implements OnInit {

  @Input() page: number;
  @Input() pagesNumber: number;
  @Input() currentSize: number;

  public sizes = [5, 10, 20]

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  lastPage(): void {
    this.router.navigate([], 
      {
        relativeTo: this.activatedRoute,
        queryParams: {page: this.pagesNumber}, 
        queryParamsHandling: "merge"
      });
  }

  firstPage(): void {
    this.router.navigate([], 
      {
        relativeTo: this.activatedRoute,
        queryParams: {page: 1}, 
        queryParamsHandling: "merge"
      });
  }

  previousPage(): void {
    this.router.navigate([], 
      {
        relativeTo: this.activatedRoute,
        queryParams: {page: --this.page}, 
        queryParamsHandling: "merge"
      });
  }

  nextPage(): void {
    this.router.navigate([], 
      {
        relativeTo: this.activatedRoute,
        queryParams: {page: ++this.page}, 
        queryParamsHandling: "merge"
      });
  }

   changeSize(): void {
    this.router.navigate([], 
      {
        relativeTo: this.activatedRoute,
        queryParams: {size: this.currentSize}, 
        queryParamsHandling: "merge"
      });
  }

}
