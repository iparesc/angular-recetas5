import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})
export class FormBasicoComponent implements OnInit {
  
  
//atributo Form Group para usar HTML
  formulario:FormGroup;
fruta:string;
  constructor (private fb:FormBuilder) { 
    this.fruta="banana";
this.formulario=this.fb.group({
  nombre:['Doraemon:Katu Kosmikoa',[ Validators.required, Validators.minLength(3)]]
})
  }
  ngOnInit() {

  }

  enviar(){

  }

}