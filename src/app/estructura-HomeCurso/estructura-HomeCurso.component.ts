import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoModel } from '../models/alumnos.model';
import { AlumnosService } from '../services/alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estructura-HomeCurso',
  templateUrl: './estructura-HomeCurso.component.html',
  styleUrls: ['./estructura-HomeCurso.component.css']
})
export class EstructuraHomeCursoComponent implements OnInit {

  alumnos:AlumnoModel[]=[];
  showTab = false;
  load = false;
  constructor(private alumnosService: AlumnosService, private router: Router) { 
    
    this.getAlumnos();

   }
    getAlumnos = async () => {
      
      await this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[])=>{
        this.alumnos = data;
        console.log(this.alumnos);
        this.load = true;
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
