import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoModel } from '../models/alumnos.model';
import { AlumnosService } from '../services/alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaModel } from '../models/asignatura.model';
import { GetSubjectsService } from '../services/get-subjects.service';
import { SubjectModel } from '../models/subject.model';
import { AddNotasService } from '../services/add-notas.service';
import { AddNotaModel } from '../models/addNota.model';
import { AddAsistenciaService } from '../services/add-asistencia.service';
import { AddAsistenciaModel } from '../models/addAsistencia.model';

@Component({
  selector: 'app-estructura-HomeCurso',
  templateUrl: './estructura-HomeCurso.component.html',
  styleUrls: ['./estructura-HomeCurso.component.css']
})
export class EstructuraHomeCursoComponent implements OnInit {
  alumnos: AlumnoModel[] = [];
  showTab = false;
  showTab2 = true;
  presente = true;
  absente = true;
  load = false;
  nota: string[] = [];
  porcentajes: string[] = [];
  numero: string[] = [];
  public filter: string = "";
  asignaturaSelected!: AsignaturaModel;
  alumno: AlumnoModel | undefined;
  subjectName!: string | null;
  subjectNum!: number | null;
  fecha: string = "";
  notasList: string[] = []
  asistenciaList: boolean[] = []
  porcentaje: number = 0;
  idAlumno: string = "";

  constructor(
    private alumnosService: AlumnosService,
    private getSubjectsService: GetSubjectsService,
    private route: ActivatedRoute,
    private addNotasService: AddNotasService,
    private addAsistenciaService: AddAsistenciaService
  ) {


  }
  getAlumnos = async (f: string) => {

    await this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[]) => {
      //this.alumnos = data.filter(word => word.asignaturas[0]._id=="6387f73427792a593fb5de3a");
      this.alumnos = data.filter(word => word.asignaturas.some(c => f.includes(c._id)));
      console.log(this.alumnos);
      this.load = true;
    });
  }

  getAlumnos2 = async (f: string) => {

    await this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[]) => {
      //this.alumnos = data.filter(word => word.asignaturas[0]._id=="6387f73427792a593fb5de3a");
      this.alumnos = data.filter(word => word.asignaturas.some(c => f.includes(c._id)));
      console.log(this.alumnos);
      this.load = true;
      window.location.reload();
    });
  }


  addNotas = async () => {

    await this.addNotasService.addNotas(this.idAlumno, this.filter, this.notasList).subscribe((data: AddNotaModel) => {
      console.log(data);
    });

  }

  addAsistencia = async (idAlumno: string) => {

    await this.addAsistenciaService.addAsistencia(idAlumno, this.filter).subscribe((data: AddAsistenciaModel) => {
      console.log(data);
    });

    console.log("Asistencia agregada");

  }



  present = (i: number, idAlumno: string) => {
    this.asistenciaList[i] = true;
    console.log(this.asistenciaList);
    this.addAsistencia(idAlumno);
    return (this.presente = true, this.absente = false);
  }

  absent = (s: string) => {
    this.idAlumno = s;
    return (this.absente = true, this.presente = false);
  }




  getFecha() {
    console.log(this.fecha);
  }

  createAsistenciaList() {
    for (let index = 0; index < Number(this.subjectNum); index++) {
      this.asistenciaList.push(false);

    }

  }

  createNotasList() {
    for (let index = 0; index < Number(this.subjectNum); index++) {
      this.notasList.push("");


    }
    console.log("Álbum2 AAAA: ", this.notasList);
  }





  // }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.getAlumnos(data['id']);
      this.filter = data['id'];
      this.subjectName = localStorage.getItem('nombreSubj');
      this.subjectNum = Number(localStorage.getItem('numCurso'));
      //this.subject = this.getSubjectsService.getSubjectById(this.filter);
      this.porcentaje = 100 / Number(this.subjectNum);
      this.createNotasList();
    })
  }

  move = () => {
    document.getElementById('chico')?.classList.toggle('chico')
  }
  showData = (s: string) => {
    this.idAlumno = s;
    console.log(s);
    return (this.showTab = true, this.showTab2 = false);

  }

  showData2 = () => {
    return (this.showTab = true, this.showTab2 = false);

  }

  hideData = () => {
    return (this.showTab = false, this.showTab2 = true);
  }

  hideData2 = async () => {
    console.log(this.notasList);
    await this.addNotas();
    await this.getAlumnos2(this.filter);
    return (this.showTab = false, this.showTab2 = true);
  }

  newRow = () => {
    this.nota.push("");
    this.porcentajes.push("");
  }

  deleteRow = () => {
    this.nota.pop();
    this.porcentajes.pop();
  }

}
