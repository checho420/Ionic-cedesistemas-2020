import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { AddEditComponent } from './add-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddEditComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            component: AddEditComponent

          }
        ]
      }
    ])
  ]
})
export class AddEditModule { }
