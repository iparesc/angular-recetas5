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
  
  @Output() eventoEmitir = new EventEmitter();

  //coches seleccionados
  receta1:Recetario;
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
  seleccionar( event, receta : Recetario ){
    console.log('ListadoComponent Emitimos evento al ComponentePadre %o', receta );
    this.eventoEmitir.emit(  //event con 2 parametros
                              {
                                 "receta": receta ,
                                 "otroParametro" : 2018
                              }
                          );

     //actualizar receta seleccionada                           
                         
     this.receta1 = receta;                     
  }
 

}
  

