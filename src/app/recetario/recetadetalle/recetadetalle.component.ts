import { Component, OnInit, Input } from '@angular/core';
import { Recetario } from '../../model/recetario';

@Component({
  selector: 'app-recetadetalle',
  templateUrl: './recetadetalle.component.html',
  styleUrls: ['./recetadetalle.component.scss']
})
export class RecetadetalleComponent implements OnInit {

 //Parametro de Entrada desde el Componete Padre al Hijo
 @Input('receta1') receta1 : Recetario; // receta para mostrar
 show:boolean;
 glyphicon:string;
 constructor() {
   console.log('RecetarioComponent constructor');
   this.show=false;
   this.glyphicon="glyphicon-chevron-down";
 }

 ngOnInit() {
   console.log('RecetarioComponent ngOnInit');
 }
 showIngredientes(){
  console.log('click ingredientes');
  this.show=!this.show
  this.glyphicon=(this.show)?'glyphicon-chevron-up':'glyphicon-chevron-down';
}

}
