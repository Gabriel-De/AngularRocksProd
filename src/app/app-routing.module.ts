import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandsComponent } from './bands/bands.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { BandDetailComponent  } from './band-detail/band-detail.component';
import { BandSearchComponent } from './band-search/band-search.component';
import { BandNewComponent } from './band-new/band-new.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'top', component: TopFiveComponent },
  { path: 'detail/:id', component: BandDetailComponent },
  { path: 'search', component: BandSearchComponent },
  { path: 'new', component: BandNewComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
