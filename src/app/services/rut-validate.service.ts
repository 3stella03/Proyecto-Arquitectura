import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutValidateService {

  constructor(private httpClient: HttpClient) { }

  usuarios = 
    [
      {"_id":"6340e72fbec26d93760870e4","rut":"19.990.015-3","pass":"hola1345","__v":0},
      {"_id":"6340eb4abec26d93760870fb","rut":"13.158.639-5","pass":"doxeadomijo3435","__v":0},
      {"_id":"6341b80ad669f2639d933127","rut":"67.797.765-6","pass":"pruebaandeoid12","__v":0},
      {"_id":"63450eb7fdb468b41b8fefd4","rut":"20.443.221.3","pass":"probandoaaa","__v":0},
      {"_id":"6345be9e862d07c2c9a8ba6f","rut":"9.331.442.K","pass":"contraseñaa","__v":0}
    ]
  

  public getUsuarios(rut?: string, pass?: string): boolean{

    let isOK: boolean = false;

    this.usuarios.forEach(user => {
      if(rut==user.rut&&pass==user.pass){
        isOK = true;
      }
    });

    return isOK;
    

  }


}


