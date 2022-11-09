import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    this.getAuth();
    

  }

  getAuth = () => {
    this.rutValidateService.getAuth().subscribe((data: UsuarioModel[])=>{
      this.usuarios = data;
      console.log(this.usuarios);
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
