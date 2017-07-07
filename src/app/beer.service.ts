import { Injectable } from '@angular/core';
import { Beer } from './beer';
//import {BEERS} from './mock-beers';
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BeerService {

  private beersUrl = 'api/beers'; //URL to web api
  constructor(private http: Http){}

  getBeers(): Promise<Beer[]> {
    return this.http.get(this.beersUrl)
      .toPromise()
      .then(response => response.json().data as Beer[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purpose only
    return Promise.reject(error.message || error);
  }

  getBeer(id: number): Promise<Beer> {
    return this.getBeers()
      .then(beers => beers.find(beer => beer.id === id));
  }


}

//this service could get data from anywhere - a web service, local storage, mock data source
