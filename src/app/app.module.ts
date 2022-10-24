import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './Login/Login.component';

import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './Cards/Cards.component';


@NgModule({
  declarations: [		
    AppComponent,

      LoginComponent,

      HeaderComponent,
      CardsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
