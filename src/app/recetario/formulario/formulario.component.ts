import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Recetario } from '../../model/recetario';
import  {FormGroup,FormBuilder} from '@angular/forms';
import * as $ from 'jquery';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  
  formulario:FormGroup;

  constructor( private fb:FormBuilder, public recetasService:RecetasService) { 
console.log('Formulario Component constructor');
this.crearFormulario();
}
  ngOnInit() {
  }
crearFormulario():void{
  console.log('FormularioComponet crear formulario');

  this.formulario=this.fb.group({
    //FormControl(input)=>['value',[Validaciones]]
    nombre:['',[Validators.required, Validators.minLength(2)]],
    cocinero:['',[Validators.minLength(5)]],
   // gluten:['',[Validators.required]],
    
  });

}
sumitar():void{
  console.log('FormularioComponent onSubmit');
  //TODO recoger datos del formulario
  let nombre =this.formulario.value.nombre;
  let receta= new Recetario(nombre,'',4,4,'',true,[])//meter más cosas
  this.recetasService.crear(receta);
  $(".close").click();
}
//cerrar modal

}
