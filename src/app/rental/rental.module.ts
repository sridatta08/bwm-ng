import  {NgModule} from '@angular/core';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalListItemComponent} from './rental-list-item/rental-list-item.component';
import {RentalComponent} from './rental.component';
import {CommonModule} from '@angular/common';
import {RentalService} from './shared/rental.service';
import {Routes, RouterModule, Route} from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import {UppercasePipe} from '../common/pipes/uppercase.pipe';

const routes: Routes = [
  {
    path: 'rentals',
   component: RentalComponent,
  children: [
    {path: '', component: RentalListComponent},
    {path: ':rentalId', component: RentalDetailComponent}
  ]}
]

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule],
  providers: [RentalService]
})
export class RentalModule {

}
