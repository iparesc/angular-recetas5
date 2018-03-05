import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Recetario } from '../model/recetario';
import { RecetasService } from '../providers/recetas.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  
  stock : Array<Recetario>;
  receta1 : Recetario;
  constructor( public recetasService:RecetasService ) {

    console.log('RecetarioComponent constructor');     

    this.receta1 = new Recetario('receta1','',4,5,'');

    this.stock = new Array<Recetario>();

    

  }

  //llamadas a los Services
  ngOnInit() {
    console.log('RecetarioComponent ngOnInit');    
    this.stock = this.recetasService.getAll();   

  }

  

}