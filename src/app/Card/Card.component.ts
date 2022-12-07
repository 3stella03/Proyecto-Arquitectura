import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoModel } from '../models/curso.model';
import { SubjectModel } from '../models/subject.model';
import { GetSubjectsService } from '../services/get-subjects.service';
import { ObtenerCursosService } from '../services/obtener-cursos.service';

@Component({
  selector: 'app-Card',
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.css']
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
      console.log(this.subjects);
    });
  }

  getSubjectId(id: string, name: string){
    this.idSubject = id;
    localStorage.setItem('idSubj', this.idSubject);
    //this.home.getAlumnos(this.idSubject);
    console.log(this.idSubject);
    console.log(name);
  }

  verCurso = (idCurso: string) => {
    this.router.navigate(['/homeCurso', idCurso]);
  }

  


  ngOnInit() {
  }

}
