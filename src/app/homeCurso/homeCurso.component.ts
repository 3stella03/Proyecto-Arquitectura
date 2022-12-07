import { Component, ElementRef, OnInit, Query, ViewChild } from '@angular/core';
import { SubjectModel } from '../models/subject.model';
import { GetSubjectsService } from '../services/get-subjects.service';
import { EstructuraHomeCursoComponent } from '../estructura-HomeCurso/estructura-HomeCurso.component';
import { Side_barComponent } from '../side_bar/side_bar.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-homeCurso',
  templateUrl: './homeCurso.component.html',
  styleUrls: ['./homeCurso.component.css']
})
export class HomeCursoComponent implements OnInit {

  subjects: SubjectModel[]=[];

  // @ViewChild(EstructuraHomeCursoComponent, { static: true })
  // estructura!: EstructuraHomeCursoComponent;
  // @ViewChild(Side_barComponent, { static: true })
  // sidebar!: Side_barComponent;
  constructor(
    private getSubjectsService: GetSubjectsService,
    ) { }

  ngOnInit() {
  }

  getSubjects = () => {
    this.getSubjectsService.getSubjects().subscribe((data: SubjectModel[])=>{
      this.subjects = data;
      console.log(this.subjects);
    });
  }
  
}
// console.log(EstructuraHomeCursoComponent, Side_barComponent);
