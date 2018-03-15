import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({name: 'filterCasa'})
export class FilterCasa implements PipeTransform {

  transform(casas: Casa[], searchText: string): Casa[] {  

    //si no hay casas retornar vacio
    if (!casas) return [];

    let casasFilterArray: Casa[] = [];

    //Filtramos si llevan gluten o no
    

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return casasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let casa = '';
      return casasFilterArray.filter(it => {
        casa = it.nombre + "" + it.direccion;
        casa = casa.toLowerCase();
        return casa.includes(searchText);
      });
    }
  }

}