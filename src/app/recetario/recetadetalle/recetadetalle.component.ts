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
 constructor() {
   console.log('CocheComponent constructor');
 }

 ngOnInit() {
   console.log('CocheComponent ngOnInit');
 }


}
