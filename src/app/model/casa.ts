import{Servicios} from './servicios';

export class Casa{

    id : number;
    nombre : string;
    precio : number;
    alquiler : boolean;
    habitaciones:number;
    foto : string;
    direccion:string;
    //caracteristicas
    servicio:Servicios[];
    
    constructor(){
       
        
    }
    
}