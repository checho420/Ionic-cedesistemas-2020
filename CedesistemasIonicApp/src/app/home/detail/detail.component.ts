import { DetailModel } from './detail.model';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { RestaurantsModule } from './../restaurants/restaurants.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantModel } from '../restaurants/restaurant.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {


  item: RestaurantModel;
  products:DetailModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantsService: RestaurantsService
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


}
