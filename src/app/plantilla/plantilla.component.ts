import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {
admin:boolean;
  constructor() { 
this.admin=true;
  }
  ngOnInit() {
  }
switchUser(){
  this.admin=!this.admin;
}

  
}
