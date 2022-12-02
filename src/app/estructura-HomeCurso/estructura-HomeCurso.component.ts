import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoModel } from '../models/alumnos.model';
import { AlumnosService } from '../services/alumnos.service';
@Component({
  selector: 'app-estructura-HomeCurso',
  templateUrl: './estructura-HomeCurso.component.html',
  styleUrls: ['./estructura-HomeCurso.component.css']
})
export class EstructuraHomeCursoComponent implements OnInit {
  // alumnos: AlumnoModel[] = [];
  showTab = false;
  showTab2 = true;
  alumnos: string[] = [];
  notas: string[] = [];
  porcentajes: string[] = [];
  numero: string[] = [];
  constructor(private alumnosService: AlumnosService) {
    // this.getAlumnos();
    this.numero = ["1"]
    this.alumnos = ["Bayron Bravo", "Estela Valderrama", "Matías Zapata"]
    this.notas = ["7.0", "6.2", "6.5"];
    this.porcentajes = ["20","50","30"];

  }
  // getAlumnos = () => {
  //   this.alumnosService.getAlumnos().subscribe((data: AlumnoModel[]) => {
  //     this.alumnos = data;
  //     console.log(this.alumnos);
  //   });


  // }

  ngOnInit() {
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

}
