import { Component, OnInit } from '@angular/core';
import {Receta} from '../model/receta'

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {


receta:Receta;
show:boolean;
glyphicon:string;

  constructor() {
    this.receta=new Receta('marmitako','karlos');
    this.receta.addIngrediente('patatas');
    this.receta.addIngrediente('chorizo');
    this.show=false;
    this.glyphicon="glyphicon-chevron-down";
   }

  ngOnInit() {
  }
sumarLike(){
  this.receta.likes++;
}
showIngredientes(){
  console.log('click ingredientes');
  this.show=!this.show
  this.glyphicon=(this.show)?'glyphicon-chevron-up':'glyphicon-chevron-down';
}
}
