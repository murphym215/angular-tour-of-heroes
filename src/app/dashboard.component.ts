import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BeerService } from './beer.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  beers: Beer[];

  Beers: Beer[] = [];

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getBeers()
      .then(beers => this.beers = beers.slice(0, 4));
  }

}
