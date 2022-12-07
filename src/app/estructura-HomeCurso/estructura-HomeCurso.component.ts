import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoModel } from '../models/alumnos.model';
import { AlumnosService } from '../services/alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estructura-HomeCurso',
  templateUrl: './estructura-HomeCurso.component.html',
  styleUrls: ['./estructura-HomeCurso.component.css']
})
export class EstructuraHomeCursoComponent implements OnInit {
  alumnos: AlumnoModel[] = [];
  showTab = false;
  showTab2 = true;
  load = false;
  notas: string [] = [];
  porcentajes: string [] = [];
  numero: string [] = [];
  public filter: string = "638a422b855d5e6f39d38a70";

  constructor(
    private alumnosService: AlumnosService,
    private route: ActivatedRoute
  ) {

    this.getAlumnos();
  }
    getAlumnos = async () => {
      
      await this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[])=>{
        this.alumnos = data.filter(word => word.asignaturas[0]._id=="6387f73427792a593fb5de3a");
        console.log(this.alumnos);
        this.load = true;
      });
  }
  // getAlumnos = () => {
  //   this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[]) => {
  //     this.alumnos = data;
  //     console.log(this.alumnos);
  //   });


  // }

  ngOnInit() {
    this.route.params.subscribe((data)=> {
      alert(data['id'])
     })
  }

  move = () => {
    document.getElementById('chico')?.classList.toggle('chico')
  }
  showData = () => {
    return (this.showTab = true, this.showTab2 = false);

  }
  hideData = () => {
    return (this.showTab = false, this.showTab2 = true);
  }

  newRow = () => {
    this.notas.push("");
    this.porcentajes.push("");
  }

  deleteRow = () =>{
    this.notas.pop();
    this.porcentajes.pop();
  }

}
