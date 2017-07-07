import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";

//Imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { BeerDetailComponent } from './beer-detail.component';
import { BeersComponent } from './beers.component';
import { BeerService } from './beer.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BeerDetailComponent,
    BeersComponent,
    FooterComponent,
  ],

  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }


