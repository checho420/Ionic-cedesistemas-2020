import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'student',
        //loadChildren: () => import('../estudiantes/estudiantes.module').then(m => m.EstudiantesPageModule),
        children: [
          {
            path: '',
            loadChildren: () => import('../estudiantes/estudiantes.module').then((m) => m.EstudiantesPageModule)
          },
          {
            path: 'detail-student',
            children: [
              {
                path: '',
                loadChildren: () => import('../detail-student/detail-student.module').then((m) => m.DetailStudentModule)
              }
            ]

          },
          {
            path: 'add-edit-student',
            children: [
              {
                path: '',
                loadChildren: () => import('../add-edit-student/add-edit-student.module').then((m) => m.AddEditStudentModule)
              }
            ]

          }
        ]
        /*
        children: [
          {
            path: '',
            loadChildren: () => import('../estudiantes/estudiantes.module').then((m) => m.EstudiantesPageModule)
          },
          {
            path: 'detail-student',
            children: [
              {
                path: '',
                loadChildren: () => import('../detail-student/detail-student.module').then((m) => m.DetailStudentModule)
              }
            ]
          },
          {
            path: 'add-edit-student',
            children: [
              {
                path: '',
                loadChildren: () => import('../add-edit-student/add-edit-student.module').then((m) => m.AddEditStudentModule)
              }
            ]
          }

        ]
        */
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      /*
      {
        path: '',
        redirectTo: '/tabs/student',
        pathMatch: 'full'
      }
      */
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/student',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
