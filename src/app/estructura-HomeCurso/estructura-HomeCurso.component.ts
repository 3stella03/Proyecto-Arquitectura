import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoModel } from '../models/alumnos.model';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-estructura-HomeCurso',
  templateUrl: './estructura-HomeCurso.component.html',
  styleUrls: ['./estructura-HomeCurso.component.css']
})
export class EstructuraHomeCursoComponent implements OnInit {

  alumnos:AlumnoModel[]=[];
  showTab = false;
  constructor(private alumnosService: AlumnosService) { 
    this.getAlumnos();

   }
    getAlumnos = () => {
      this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[])=>{
        this.alumnos = data;
        console.log(this.alumnos);
      });
    
  }
  
  ngOnInit() {
  }

  move = () =>{
    document.getElementById('chico')?.classList.toggle('chico')
}
  showData = () =>{
    return (this.showTab = true);
  }
  hideData = () => {
    return (this.showTab = false);
  }
}
