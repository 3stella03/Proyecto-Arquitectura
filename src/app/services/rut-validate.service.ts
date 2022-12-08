import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class RutValidateService {

  constructor(private httpClient: HttpClient) { }

  public getAuth(userRut: string, userPass: string): Observable<AuthModel>{
    return this.httpClient.post<AuthModel>('https://portaldocentetwk.onrender.com/api/auth', { rut: userRut, password:userPass });
  }
}


