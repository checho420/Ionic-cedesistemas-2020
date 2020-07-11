import { NavController } from '@ionic/angular';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from '../restaurants/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {

  title: string = "Crear Restaurante";

  id: string;
  nombre: string;
  imagen: string;
  direccion: string;
  telefono: string;
  sitioWeb: string;
  latitud: number = 0;
  longitud: number = 0;
  productos?: any;
  calificacion: number;


  constructor(private restaurantsService: RestaurantsService,
    private navController: NavController,
    private activateRoute: ActivatedRoute
  ) {

    this.activateRoute.params.subscribe((params: RestaurantModel) => {

      if (this.id) {
        this.title = "Editar Restaurante";

        this.nombre = params.nombre;
        this.imagen = params.imagen;
        this.direccion = params.direccion;
        this.telefono = params.telefono;
        this.sitioWeb = params.sitioWeb;
        this.latitud = Number(params.latitud);
        this.longitud = Number(params.longitud);
        this.productos = params.productos;
        this.calificacion = params.calificacion;
      }



    });

  }

  ngOnInit() { }

  add() {
    const body: RestaurantModel = {
      nombre: this.nombre,
      imagen: this.imagen,
      direccion: this.direccion,
      telefono: this.telefono,
      sitioWeb: this.sitioWeb,
      latitud: this.latitud,
      longitud: this.longitud,
      calificacion: this.calificacion,

    };

    if (this.id) {
      body.id = this.id;
      this.restaurantsService.updateRestaurant(this.id, body)
        .subscribe((resp) => {
          window.localStorage.setItem('refresh', 'true');
          this.navController.back();
        });

    } else {
      this.restaurantsService.addRestaurant(body)
        .subscribe(
          ((data) => {
            window.localStorage.setItem('refresh', 'true');
            this.navController.back();
          })
        );

    }


  }

}
