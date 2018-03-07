import { Injectable } from '@angular/core';
import { Recetario } from '../model/recetario';
import { MOCKS_RECETAS } from './mocks.recetas';
import { element } from 'protractor';


@Injectable()
export class RecetasService {
recetas:Recetario[];
  constructor() { 
    console.log('RecetasService constructor');
  }

  /** 
   * Retorna todos las Recetas que tenemos en Stock
  */
  getAll():Recetario[]{
    console.log('RecetarioService getAll');
     this.recetas=[];
    let receta;
    
    
    
    let jsonData = JSON.parse(MOCKS_RECETAS.stock);

    jsonData.forEach( element => {


      
        receta = new Recetario( 
                          element.nombre, 
                          element.foto, 
                          element.calorias,
                          element.likes,
                          element.descripcion,
                          element.gluten,
                          element.ingredientes
                          
                          );

        this.recetas.push(receta);

    });

    return this.recetas;
  }
/**
 * Crear Nueva Receta
 * @param receta 
 */
crear(receta:Recetario):void{
  console.log('');
this.recetas.unshift(receta);
}
}