/**
 * Created by MatthewMurphy on 5/9/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import { Beer } from './beer';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { BeerService } from './beer.service';
@Component({
  selector: 'beer-detail',
  templateUrl: './beer-detail.component.html'
})
export class BeerDetailComponent implements OnInit {
  @Input() beer: Beer;

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.beerService.getBeer(+params.get('id')))
      .subscribe(beer => this.beer = beer);
  }

 goBack(): void {
   this.location.back();
   }
}
