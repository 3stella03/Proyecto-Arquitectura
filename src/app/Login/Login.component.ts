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
    this.rutValidateService.getAuth(rut, pass).subscribe((data: AuthModel)=>{
      console.log(data);
      if (data.status) {
        this.router.navigateByUrl('/home');
      } else {
        alert("Datos incorrectos");
      }

    });
  }

  

  verificarUsuario(rut?: string, pass?: string): boolean{

    let isOK: boolean = false;

    this.usuarios.forEach(user => {
      if(rut==user.rut&&pass==user.pass){
        isOK = true;
      }
    });

    return isOK;
    

  }

  logear(b: boolean){
    if(b){
      this.router.navigateByUrl('/home');
    } else {
      alert("Datos incorrectos");
    }
  }

  


  ngOnInit() {
  }

}
