import { HttpClient } from '@angular/common/http';
import { StudentModel } from './../models/student.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  urlRoot = "https://cedesistemas-app-api.azurewebsites.net/api/Estudiantes"


  getStudents() {

    const url = this.urlRoot;
    return this.httpClient.get(url);
  }

  deleteStudent(id) {
    const url = this.urlRoot + id;
    return this.httpClient.delete(url);

  }

  addStudent(body: StudentModel) {
    const url = this.urlRoot;
    return this.httpClient.post(url, body);

  }

  updateStudent(id: string, body) {
    const url = this.urlRoot + id;
    return this.httpClient.put(url, body);
  }

}
