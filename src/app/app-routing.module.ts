import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeCursosComponent } from './components/home-cursos/home-cursos.component';
import {CursoComponent} from './components/curso/curso.component'
import { ExamenComponent } from './components/examen/examen.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: HomeCursosComponent},
  {path: 'curso', component: CursoComponent},
  {path:'curso/examen',component:ExamenComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
