import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
@Component({
  selector: 'app-side_bar',
  templateUrl: './side_bar.component.html',
  styleUrls: ['./side_bar.component.css']
})
export class Side_barComponent implements OnInit {
  
  constructor(private router: Router) {
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
