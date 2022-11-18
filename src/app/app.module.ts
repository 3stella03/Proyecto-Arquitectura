import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './Login/Login.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './Card/Card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Side_barComponent} from './side_bar/side_bar.component'
import { HomeCursoComponent } from './homeCurso/homeCurso.component';
import { EstructuraHomeCursoComponent } from './estructura-HomeCurso/estructura-HomeCurso.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [							
    AppComponent,
      LoginComponent,
      HeaderComponent,
      CardComponent,
      HomeComponent,
      Side_barComponent,
      HomeCursoComponent,
      EstructuraHomeCursoComponent,
      LoaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
