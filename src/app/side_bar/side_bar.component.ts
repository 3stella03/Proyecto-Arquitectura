import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { GetSubjectsService } from '../services/get-subjects.service';
import { SubjectModel } from '../models/subject.model';
@Component({
  selector: 'app-side_bar',
  templateUrl: './side_bar.component.html',
  styleUrls: ['./side_bar.component.css']
})
export class Side_barComponent implements OnInit {

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

  

  ngOnInit() {
  }

  verHome = () => {
    this.router.navigateByUrl('/home');
  }



  menuToggle = () =>{
      document.getElementById('open')?.classList.toggle('open')
  }

 
}
