import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddNotaModel } from '../models/addNota.model';
import { AlumnoModel } from '../models/alumnos.model';

@Injectable({providedIn: 'root'})
export class AddNotasService {

constructor(private httpClient: HttpClient) { }

    public addNotas(idAlumno: string, idAsignatura: string, notasAsignatura: string[]): Observable<AddNotaModel>{
        return this.httpClient.post<AddNotaModel>('https://portaldocentetwk.onrender.com/api/notasbyid/'+idAlumno, { _id: idAsignatura, notas:notasAsignatura });
        
    }
  }




