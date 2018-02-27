import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {
nombre:string;
foto:string;
likes:number;
descripcion:string;
imagen_gluten:string;
isGlutenFree:boolean;
  constructor() {
    this.nombre='Bokata de Kalamares';
    this.foto='http://cd00.epimg.net/cincodias/imagenes/2016/10/26/empresas/1477481793_763924_1477496457_noticia_normal.jpg';
    this.likes= 25;
    this.descripcion='Bocata Madrileño';
    this.imagen_gluten='';
    this.isGlutenFree=false;
   }

  ngOnInit() {
  }
sumarLike(){
  this.likes++;
}
}
