import { Component, OnInit } from '@angular/core';
import { CasasService } from '../providers/casas.service';
import { Casa } from '../model/casa';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {
  
  casaSelec: Casa;
  casas : Casa[];
  

  constructor( public casasService:CasasService ) {
      console.log('CasasComponent constructor');
      this.casas = [];
  }

  ngOnInit() {
    console.log('casasComponent ngOnInit');
    this.cargarCasas();
    this.casaSelec = this.casas[0];

  }
  //ngOnInit
  cargarCasas(){
    console.log('CasasComponent cargarTareas');
    this.casas = [];
    this.casasService.getCasas().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }

  /**
   * Mapea los Datos en formato Json a Todo que proviene del Servicio Rest
   * @param resultado : any 
   */
  mapeo( result : any ){

    let casa:Casa;

    result.forEach(el => {
      casa = new Casa();
      casa.nombre = el.nombre;
      casa.precio = el.precio;
      casa.alquiler = el.alquiler;
      casa.habitaciones = el.habitaciones;
      casa.foto = el.foto;
      casa.direccion = el.direccion;
      casa.servicio = el.servicios;
      this.casas.push(casa);
    })

  }
  seleccionarCasa( casa : Casa ){
    console.log('RecetarioComponent seleccionarReceta');
    this.casaSelec = casa;
  }
}