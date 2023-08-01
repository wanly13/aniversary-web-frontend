import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  /* {
    path: '',
    component: NavComponent,
    children: [      
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
        
      },
     
      {
        path: 'correo',
        component: CorreoComponent
      },
      {
        path: 'asistencia/alumno',
        component: AsistenciaAlumnoComponent
      },
      {
        path: 'asistencia/docente',
        component: AsistenciaDocenteComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },

    ]
  }, */
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
