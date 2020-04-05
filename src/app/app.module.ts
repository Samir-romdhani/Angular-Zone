import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
//import { RsPaginationModule } from 'projects/rs-pagination-lib/src/public-api';
import { RsPaginationModule } from '@cell4rom/front-line';


import { RsChartsC3LibModule } from 'projects/rs-charts-c3-lib/src/public_api';
import { RSPaginationModule } from '@cell4rom/rs-pagination';
// import { RsChartsC3LibModule } from '@cell4rom/charts-c3-lib';

export const ROUTES : Routes = [

  {
    path: '',  
    component: AppComponent,
    data: {},
  },
  { path: '**',
    component: AppComponent 
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      ROUTES,
      {useHash: true}
     // { enableTracing: true },
    ),
    HttpClientModule,
    //RsPaginationModule,
    RSPaginationModule,
    RsChartsC3LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
