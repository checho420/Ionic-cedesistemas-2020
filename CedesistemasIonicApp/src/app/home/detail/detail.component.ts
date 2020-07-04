import { RestaurantsService } from './../restaurants/restaurants.service';
import { DetailModel } from './detail.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantModel } from '../restaurants/restaurant.model';

import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {


  item: RestaurantModel;
  products: DetailModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private callNumber: CallNumber
  ) {
    this.activatedRoute.params.subscribe((paramas: RestaurantModel) => {

      this.item = paramas;
      console.log(this.item);


      this.loadProducts(this.item.id);

    })
  }

  ngOnInit() { }


  loadProducts(id) {

    console.log(id);

    this.restaurantsService.getProducts(id)
      .subscribe((data: DetailModel[]) => {
        this.products = data;
        console.log(this.products);

      });
  }

  callPhone(phone) {

    this.callNumber.callNumber(phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));

  }


}
