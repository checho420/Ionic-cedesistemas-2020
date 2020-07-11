import { StudentService } from './../shared/services/student.service';
import { StorageService } from './../../../../../CedesistemasIonicApp/src/app/shared/services/storage.service';

import { StudentModel } from './../shared/models/student.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss'],
})
export class DetailStudentComponent implements OnInit {


  student: StudentModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private storageService: StorageService,
  ) {

    this.activatedRoute.params.subscribe((params: StudentModel) => {

      debugger;

      this.student = params;
      console.log(this.student);


    })
  }

  ngOnInit() { }


}
