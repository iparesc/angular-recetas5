import { Component, OnInit } from '@angular/core';
import { CochesService } from '../../providers/coches.service';
import * as $ from 'jquery';

import { Coche } from '../../model/coche';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {
formulario:FormGroup;
  constructor(private fb: FormBuilder, public  cochesService:CochesService ) { }

  ngOnInit() {
  }

}
