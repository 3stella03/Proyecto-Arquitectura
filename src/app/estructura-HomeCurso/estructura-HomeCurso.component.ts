import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoModel } from '../models/alumnos.model';
import { AlumnosService } from '../services/alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaModel } from '../models/asignatura.model';
import { GetSubjectsService } from '../services/get-subjects.service';
import { SubjectModel } from '../models/subject.model';

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
  public filter: string = "";
  asignaturaSelected!: AsignaturaModel;
  alumno: AlumnoModel | undefined;
  subjectName!: string | null;

  constructor(
    private alumnosService: AlumnosService,
    private getSubjectsService: GetSubjectsService,
    private route: ActivatedRoute
  ) {

    
  }
    getAlumnos = async (f:string) => {
      
      await this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[])=>{
        //this.alumnos = data.filter(word => word.asignaturas[0]._id=="6387f73427792a593fb5de3a");
        this.alumnos = data.filter(word => word.asignaturas.some(c => f.includes(c._id)));
        console.log(this.alumnos);
        this.load = true;
      });
  }
  // getAlumnos = () => {
  //   this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[]) => {
  //     this.alumnos = data;
  //     console.log(this.alumnos);
  //   });


  getAlumno = async (f:string) => {
      
    await this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[])=>{
      //this.alumnos = data.filter(word => word.asignaturas[0]._id=="6387f73427792a593fb5de3a");
      this.alumnos = data.filter(word => word.asignaturas.some(c => f.includes(c._id)));
      console.log(this.alumnos);
      this.load = true;
    });
}


  // }

  ngOnInit() {
    this.route.params.subscribe((data)=> {
      this.getAlumnos(data['id']);
      this.filter = data['id'];
      this.subjectName = localStorage.getItem('nombreSubj');
      //this.subject = this.getSubjectsService.getSubjectById(this.filter);
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
