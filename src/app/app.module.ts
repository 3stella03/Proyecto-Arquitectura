import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './Login/Login.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/Card.component';
import { Side_barComponent } from './side_bar/side_bar.component';
import { HomeCursoComponent } from './homeCurso/homeCurso.component';


@NgModule({
  declarations: [					
    AppComponent,
      LoginComponent,
      HeaderComponent,
      CardComponent,
      HomeComponent,
      Side_barComponent,
      HomeCursoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
