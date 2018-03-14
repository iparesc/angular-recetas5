import{Servicios} from '../model/servicios'

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
    
    constructor(nombre:string, precio:number, alquiler:boolean, habitaciones:number, foto:string, direccion:string, servicio:Servicios[]){
        this.id = -1;
        this.nombre = nombre;
        this.precio = precio;
        this.alquiler = alquiler;
        this.habitaciones= habitaciones;
        if ( foto ){
            this.foto = foto;
        }else{
            this.foto = '';
        }    
        this.direccion = direccion;
        this.servicio= servicio;
        
    }
    
}