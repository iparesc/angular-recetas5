import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Casa } from '../model/casa';


const END_POINT = "http://localhost:3000";


@Injectable()
export class CasasService {
  

  constructor( public http: HttpClient) { 
    console.log('TodosService constructor');
  }


  getCasas():Observable<any>{

    //let url = END_POINT + '/todos?userId=2';
    let url = END_POINT + '/casas';
    console.log(`TodosService getCasas ${url}`);
    return this.http.get(url);

  } 
}
