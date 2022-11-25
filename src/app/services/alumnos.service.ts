import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlumnoModel } from '../models/alumnos.model';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private httpClient: HttpClient) { }


  public getAlumnos(): Observable<AlumnoModel[]>{
    return this.httpClient.get<AlumnoModel[]>('https://api-intranet-twk.herokuapp.com/api/alumnos');
  }


}
