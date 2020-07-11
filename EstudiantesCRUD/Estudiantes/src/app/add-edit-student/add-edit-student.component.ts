import { NavController } from '@ionic/angular';
import { StudentService } from './../shared/services/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentModel } from '../shared/models/student.model';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.scss'],
})
export class AddEditStudentComponent implements OnInit {

  title: string = "Crear Estudiante";

  id?: string;
  nombres: string;
  apellidos: string;
  foto: string;
  cedula: number;
  fechaNacimiento: string;
  email: string;
  telefono: string;

  constructor(
    private studentService: StudentService,
    private navController: NavController,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.subscribe((params: StudentModel) => {
      debugger;

      if (this.id) {
        this.title = "Editar Restaurante";
        this.nombres = params.nombres;
        this.apellidos = params.apellidos;
        this.foto = params.foto;
        this.telefono = params.telefono;
        this.cedula = params.cedula;
        this.fechaNacimiento = params.fechaNacimiento;
        this.email = params.email;
        this.telefono = params.telefono;
      }
    });
  }

  ngOnInit() { }

  add() {
    const body: StudentModel = {

      nombres: this.nombres,
      apellidos: this.apellidos,
      foto: this.foto,
      cedula: this.cedula,
      fechaNacimiento: this.fechaNacimiento,
      email: this.email,
      telefono: this.telefono

    };

    if (this.id) {
      body.id = this.id;
      this.studentService.updateStudent(this.id, body)
        .subscribe((resp) => {
          window.localStorage.setItem('refresh', 'true');
          this.navController.back();
        });

    } else {
      this.studentService.addStudent(body)
        .subscribe(
          ((data) => {
            window.localStorage.setItem('refresh', 'true');
            this.navController.back();
          })
        );

    }


  }

}
