import { Component, OnInit } from '@angular/core';
import { RsPaginationService } from './rs-pagination.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public list: any[]; 

  public page: any;

  public pagesNumber: number;

  public size: any;
  
  constructor(private rsPaginationService : RsPaginationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
) {
}

ngOnInit(): void {
  /*
  this.rsPaginationService.searchForMovie("james", 1)
  .then(res => {
    console.log("list : "+JSON.stringify(res))
    this.list = res.results;
    this.page = res.page;
    this.pagesNumber = res.page;
    this.size = 20;
  })
  */

  this.activatedRoute.queryParams
  .subscribe(params => {
              this.rsPaginationService.searchForMovieByObservable2(
                params['page'], params['size']
              )
          .subscribe(
          res => {
                this.list = res.data;
                this.page = res.page;
                this.pagesNumber = res.total_pages;
                this.size = res.per_page;
                  },
          error => {
          });
});
}

}
