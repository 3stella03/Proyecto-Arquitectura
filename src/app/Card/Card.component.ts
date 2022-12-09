import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoModel } from '../models/curso.model';
import { SubjectModel } from '../models/subject.model';
import { GetSubjectsService } from '../services/get-subjects.service';
import { ObtenerCursosService } from '../services/obtener-cursos.service';

@Component({
  selector: 'app-Card',
  templateUrl:'./Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  cursos:CursoModel[]=[];
  subjects: SubjectModel[]=[];
  idSubject: string = "";

  constructor(private getSubjectsService: GetSubjectsService, private router: Router) {

    this.getSubjects();

    }

  getSubjects = () => {
    this.getSubjectsService.getSubjects().subscribe((data: SubjectModel[])=>{
      this.subjects = data;
    });
  }

  getSubjectId(id: string, name: string){
    this.idSubject = id;
    localStorage.setItem('idSubj', this.idSubject);
  }

  verCurso = (idCurso: string, nombreCurso: string, numCurso: Number) => {
    this.router.navigate(['/homeCurso', idCurso]);
    localStorage.setItem('nombreSubj', nombreCurso);
    localStorage.setItem('numCurso', String(numCurso));
  }

  


  ngOnInit() {
  }

}
