import { Pipe, PipeTransform } from '@angular/core';
import { Recetario } from '../model/recetario';

@Pipe({
  name: 'filtrar'
})
export class FiltrarRecetaPipe implements PipeTransform {

  /**
   * Filtro para buscar en una coleccion de Coches. No es CaseSensitive.
   * @param stock : Receta[]
   * @param searchText : string con el nombre de la receta
   */
  transform(stock: Recetario[], searchText: string): Recetario[] {

    if(!stock) return [];
    if(!searchText) return stock;
    searchText = searchText.toLowerCase();
    let nombreReceta = "";
    return stock.filter( recetaIt => {
        nombreReceta = recetaIt.nombre;        
        nombreReceta = nombreReceta.toLowerCase();
        return nombreReceta.includes(searchText);
    });
   }

}