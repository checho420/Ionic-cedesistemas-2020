
import { RouterModule } from '@angular/router';

import { ExploreContainerComponentModule } from './../explore-container/explore-container.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailStudentComponent } from './detail-student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DetailStudentComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,

    RouterModule.forChild([
      {
        path: "",
        component: DetailStudentComponent
      }
    ])
  ]
})
export class DetailStudentModule { }
