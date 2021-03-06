import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantModel } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  urlRoot = "https://cedesistemas-app-api.azurewebsites.net/api/Restaurantes/"

  constructor(private httpClient: HttpClient) { }


  getRestaurats() {

    const url = this.urlRoot;
    return this.httpClient.get(url);
  }

  getProducts(id) {
    const url = this.urlRoot + id + "/Productos"
    return this.httpClient.get(url);
  }

  deleteRestaurant(id) {
    const url = this.urlRoot + id;
    return this.httpClient.delete(url);

  }

  addRestaurant(body: RestaurantModel) {
    const url = this.urlRoot;
    return this.httpClient.post(url, body);

  }

  updateRestaurant(id: string, body) {
    const url = this.urlRoot + id;
    return this.httpClient.put(url, body);
  }

}
