import { AboutComponent } from './about/about.component';
import { FundamentsComponent } from './fundaments/fundaments.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    FundamentsComponent, 
    AboutComponent],
  providers:[
    RestaurantsService
  ]
})
export class HomePageModule {}
