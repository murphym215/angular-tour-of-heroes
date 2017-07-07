/**
 * Created by MatthewMurphy on 7/3/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BeersComponent } from './beers.component';
import { BeerDetailComponent } from './beer-detail.component';

const Routes = [
  {  path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {  path: 'dashboard', component: DashboardComponent },
  {  path: 'beers', component: BeersComponent },
  {  path: 'detail/:id', component: BeerDetailComponent } //The colon (:) in the path indicates that :id is a placeholder for a specific hero id when navigating to the HeroDetailComponent
];

/*the routes are an array of route definitions
 *Path: The router matches this route's path to the URL in the browser address bar (heroes).
 Component: The component that the router should create when navigating to this route (HeroesComponent). */

@NgModule ({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
