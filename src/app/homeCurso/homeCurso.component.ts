import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EstructuraHomeCursoComponent } from '../estructura-HomeCurso/estructura-HomeCurso.component';
import { Side_barComponent } from '../side_bar/side_bar.component';
@Component({
  selector: 'app-homeCurso',
  templateUrl: './homeCurso.component.html',
  styleUrls: ['./homeCurso.component.css']
})
export class HomeCursoComponent implements OnInit {

  // @ViewChild(EstructuraHomeCursoComponent, { static: true })
  // estructura!: EstructuraHomeCursoComponent;
  // @ViewChild(Side_barComponent, { static: true })
  // sidebar!: Side_barComponent;
  constructor() { }

  ngOnInit() {
  }
  
}
// console.log(EstructuraHomeCursoComponent, Side_barComponent);
