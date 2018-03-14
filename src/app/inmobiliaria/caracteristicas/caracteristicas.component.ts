import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';
@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss']
})
export class CaracteristicasComponent implements OnInit {
  @Input('casa') casa : Casa;
  constructor() { }

  ngOnInit() {
  }

}
