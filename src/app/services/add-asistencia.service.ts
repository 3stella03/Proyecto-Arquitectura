import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddAsistenciaModel } from '../models/addAsistencia.model';

@Injectable({providedIn: 'root'})
export class AddAsistenciaService {

constructor(private httpClient: HttpClient) { }

public addAsistencia(idAlumno: string, idAsignatura: string): Observable<AddAsistenciaModel>{
    return this.httpClient.post<AddAsistenciaModel>('https://portaldocentetwk.onrender.com/api/postasistenciabyid/'+idAlumno, { _id: idAsignatura });
    
}




}
