import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const searchQuery = 'https://api.themoviedb.org/3/search/movie';
const api_key = '2ea07336a16963c373813aa61c2a76a5';

@Injectable({
  providedIn: 'root'
})
export class RsPaginationService {

  constructor(private httpClient: HttpClient) { }
  
    searchForMovie(name: string, page: number = 1){
      //If no page is provided default the first will be taken
      return this.httpClient.get<any>(searchQuery, {
        params: {
          query: name,
          page: page.toString(),
          api_key: api_key
        }
      }).toPromise();
    }

    searchForMovieByObservable(name: string, page: number = 1){
      //If no page is provided default the first will be taken
      return this.httpClient.get<any>(searchQuery, {
        params: {
          query: name,
          page: page.toString(),
          api_key: api_key
        }
      });
    }
}
