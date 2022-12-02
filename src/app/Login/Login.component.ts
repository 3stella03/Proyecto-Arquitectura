import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from '../models/auth.model';
import { UsuarioModel } from '../models/usuario.model';
import { RutValidateService } from '../services/rut-validate.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  rut: string = "";
  pass: string = "";

  constructor(private rutValidateService: RutValidateService, private router: Router){

    

  }

  getAuth = (rut: string, pass: string) => {
    this.router.navigateByUrl('/loader');
    this.rutValidateService.getAuth(rut, pass).subscribe((data: AuthModel)=>{
      console.log(data);
      if (data.status) {
        this.router.navigateByUrl('/homeCurso');
      } else {
        alert("Datos incorrectos");
      }

    });
  }


  formatearRut(rut: string) {

    let actual = rut.replace(/^0+/, "");
    let rutPuntos = "";
  
    if (actual != '' && actual.length > 1) {
        let sinPuntos = actual.replace(/\./g, "");
        let actualLimpio = sinPuntos.replace(/-/g, "");
        let inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        
        let i = 0;
        let j = 1;
  
        for (i = inicio.length - 1; i >= 0; i--) {
            let letra = inicio.charAt(i);
            rutPuntos = letra + rutPuntos;
            if (j % 3 == 0 && j <= inicio.length - 1) {
                rutPuntos = "." + rutPuntos;
            }
            j++;
        }
  
        let dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
    }
    this.rut = String(rutPuntos).toUpperCase();
  }

  


  ngOnInit() {

  }

}
