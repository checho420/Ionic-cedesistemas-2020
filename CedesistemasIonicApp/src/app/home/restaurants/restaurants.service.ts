import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
