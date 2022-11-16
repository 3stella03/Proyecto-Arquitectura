import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoModel } from '../models/curso.model';
import { ObtenerCursosService } from '../services/obtener-cursos.service';

@Component({
  selector: 'app-Card',
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cursos:CursoModel[]=[];

  constructor(private obtenerCursosService: ObtenerCursosService, private router: Router) {

    this.getCursos();

   }

    getCursos = () => {
    this.obtenerCursosService.getCursos().subscribe((data: CursoModel[])=>{
      this.cursos = data;
      console.log(this.cursos);
    });
    
  }

  verCurso = () => {
    this.router.navigateByUrl('/homeCurso');
  }

  


  ngOnInit() {
  }

}
