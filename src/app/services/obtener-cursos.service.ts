import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CursoModel } from '../models/curso.model';


@Injectable({
  providedIn: 'root'
})
export class ObtenerCursosService {

  constructor(private httpClient: HttpClient) { }


  public getCursos(): Observable<CursoModel[]>{
    return this.httpClient.get<CursoModel[]>('https://portaldocente3.herokuapp.com/api/cursos');
  }


}
