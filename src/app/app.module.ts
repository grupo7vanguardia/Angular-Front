import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { HomeCursosComponent } from './components/home-cursos/home-cursos.component';
import { CursoComponent } from './components/curso/curso.component';
import { ExamenComponent } from './components/examen/examen.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeCursosComponent,
    CursoComponent,
    ExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule ,
    FlashMessagesModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
