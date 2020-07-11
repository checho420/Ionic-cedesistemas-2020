import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudiantesPage } from './estudiantes.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EstudiantesRoutingModule,
    RouterModule.forChild([
      {
        path:"",
        component: EstudiantesPage
      }
    ])
  ],
  declarations: [EstudiantesPage]
})
export class EstudiantesPageModule { }
