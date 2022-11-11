import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RutValidateService {

  constructor(private httpClient: HttpClient) { }


  public getAuth(): Observable<UsuarioModel[]>{
    return this.httpClient.get<UsuarioModel[]>('https://portaldocente3.herokuapp.com/api/usuarios');
  }


}


