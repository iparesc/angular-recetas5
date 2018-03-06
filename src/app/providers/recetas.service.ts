import { Injectable } from '@angular/core';
import { Recetario } from '../model/recetario';
import { MOCKS_RECETAS } from './mocks.recetas';
import { element } from 'protractor';


@Injectable()
export class RecetasService {

  constructor() { 
    console.log('RecetasService constructor');
  }

  /** 
   * Retorna todos los Coches que tenemos en Stock
  */
  getAll():Recetario[]{
    console.log('CochesService getAll');
    let recetas:Recetario[] = [];
    let receta;
    
    let jsonData = JSON.parse(MOCKS_RECETAS.stock);

    jsonData.forEach( element => {
      
        receta = new Recetario( 
                          element.nombre, 
                          element.foto, 
                          element.calorias,
                          element.likes,
                          element.descripcion
                         
                          );

        recetas.push(receta);

    });

    return recetas;
  }


}