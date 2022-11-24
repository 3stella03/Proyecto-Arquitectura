import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-estructura-HomeCurso',
  templateUrl: './estructura-HomeCurso.component.html',
  styleUrls: ['./estructura-HomeCurso.component.css']
})
export class EstructuraHomeCursoComponent implements OnInit {

  
  constructor() { 

  }

  
  ngOnInit() {
  }

  move = () =>{
    document.getElementById('chico')?.classList.toggle('chico')
}

}
