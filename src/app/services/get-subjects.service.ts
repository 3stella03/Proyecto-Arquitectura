import { Injectable } from '@angular/core';
import { SubjectModel } from '../models/subject.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSubjectsService {

constructor(private httpClient: HttpClient) { }

public getSubjects(): Observable<SubjectModel[]>{
  return this.httpClient.get<SubjectModel[]>('https://portaldocentetwk.onrender.com/api/ramos');
}




}
