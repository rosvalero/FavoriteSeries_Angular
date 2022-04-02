import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavSeriesComponent } from './series/fav-series/fav-series.component';
import { SinopsisComponent } from './series/sinopsis/sinopsis.component';

const routes: Routes = [
  {
    path:'favseriesList',
    component: FavSeriesComponent,
  },
  {
    path:'sinopsisList',
    component: SinopsisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
