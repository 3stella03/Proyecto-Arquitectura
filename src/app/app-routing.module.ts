import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeCursoComponent } from './homeCurso/homeCurso.component';
import { LoginComponent } from './Login/Login.component';
import { Side_barComponent} from './side_bar/side_bar.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'homeCurso/:id', component: HomeCursoComponent },
  { path: '', component: LoginComponent },
  { path: 'loader', component: LoaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
