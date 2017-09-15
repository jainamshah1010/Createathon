import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';


export const ROUTES: Routes = [
  { path: 'restaurant', component: RestaurantComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),BrowserModule,BsDropdownModule.forRoot(),AccordionModule.forRoot(),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
    

}
