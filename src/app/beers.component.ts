import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BeerService } from './beer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css', './app.extras.css'],
  providers: [] //tells Angular to create a fresh instance of the BeerService when it creates an AppComponent
})
export class BeersComponent implements OnInit {
  title = 'Selection of Beers';
  selectedBeer: Beer;
  beers: Beer[];

  constructor(
    private beerService: BeerService,
    private router: Router) { }

  getBeers(): void {
  this.beerService.getBeers().then(beers => this.beers = beers);
   }

  ngOnInit(): void {
   this.getBeers();
   }

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBeer.id]);
  }
}




