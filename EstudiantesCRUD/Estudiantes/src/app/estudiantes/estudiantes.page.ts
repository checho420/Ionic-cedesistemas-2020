import { StudentService } from './../shared/services/student.service';
import { StudentModel } from './../shared/models/student.model';
import { AlertController } from '@ionic/angular';
import { StorageService } from './../../../../../CedesistemasIonicApp/src/app/shared/services/storage.service';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: 'estudiantes.page.html',
  styleUrls: ['estudiantes.page.scss']
})
export class EstudiantesPage {

  students: StudentModel[] = [];
  studentsAll: StudentModel[] = [];



  constructor(
    private studentService: StudentService,
    private storageService: StorageService,
    public alertController: AlertController,
    private activateRoute: ActivatedRoute
  ) {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.storageService.get('restaurats').then((value: any) => {
      if (value) {
        this.students = value;
        this.studentsAll = value;
      } else {
        this.studentService.getStudents()
          .subscribe((data: StudentModel[]) => {
            this.students = data;
            this.studentsAll = data;
            console.log(this.students);
          });
      }
    });
  }

  search(evt) {
    const text: string = evt.srcElement.value;
    if (!text) {
      this.loadRestaurants();
    }
    /*
    this.restaurants = this.restaurantsAll.filter((r: RestaurantModel) => {
      if (r.nombre.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
        return r;
      }
    });
    */
  }


  async delete(id: string) {
    /*

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
    */

  }

}
