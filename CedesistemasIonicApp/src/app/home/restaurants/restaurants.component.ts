import { StorageService } from './../../shared/services/storage.service';
import { RestaurantsService } from './restaurants.service';
import { RestaurantModel } from './restaurant.model';
import { Component, OnInit } from '@angular/core';
import { interval } from "rxjs";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent {

  restaurants: RestaurantModel[] = [];
  restaurantsAll: RestaurantModel[];

  constructor(private restaurantsService: RestaurantsService,
    private storageService: StorageService,
    public alertController: AlertController) {

    this.loadRestaurants();
    this.refresh();

  }

  refresh() {
    let int = interval(50000);
    int.subscribe(r => {
      console.log("refrescando");
      //this.loadRestaurants();

    })
  }

  loadRestaurants() {

    this.storageService.get('restaurats').then((value: any) => {

      if (value) {
        this.restaurants = value;
        this.restaurantsAll = value;
      } else {
        this.restaurantsService.getRestaurats()
          .subscribe((data: RestaurantModel[]) => {
            this.restaurants = data;
            this.restaurantsAll = data;
            //console.log(this.restaurants);

          });
      }
    });
  }

  search(evt) {
    const text: string = evt.srcElement.value;
    if (!text) {
      this.loadRestaurants();
    }
    this.restaurants = this.restaurantsAll.filter((r: RestaurantModel) => {
      if (r.nombre.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
        return r;
      }
    });
  }

  async delete(id: string) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar',
      message: '¿Esta seguro que desea Eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log();
            //console.log('Confirm Okay ' + id);
            this.restaurantsService.deleteRestaurant(id)
              .subscribe((data) => {

                this.loadRestaurants();
              });
          }
        }
      ]
    });


    await alert.present();

  }







}
