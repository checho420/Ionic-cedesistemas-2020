import { RouterModule } from '@angular/router';
import { ExploreContainerComponentModule } from './../explore-container/explore-container.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddEditStudentComponent } from './add-edit-student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AddEditStudentComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,

    RouterModule.forChild([
      {
        path:"",
        component: AddEditStudentComponent
      }
    ])

  ]
})
export class AddEditStudentModule { }
